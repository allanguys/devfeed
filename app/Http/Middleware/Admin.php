<?php

namespace Fedn\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;

class Admin
{

    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  Guard $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (app()->environment() === "local") {
            $admin = \Fedn\Models\Role::with('users')->find(1);
            $user = $admin->users()->first();
            if(!$user) {
                $user = factory('Fedn\Models\User')->create();
                $admin->users()->attach($user->id);
            }
            $this->auth->setUser($user);
            return $next($request);
        }
        if ($this->auth->guest()) {
            if ($request->ajax()) {
                return response('Unauthorized.', 401);
            } else {
                return redirect()->guest('login');
            }
        }

        if($request->user()->inRoles([1,2,3])) {
            return $next($request);
        }


        return response('Unauthorized.', 403);
    }
}
