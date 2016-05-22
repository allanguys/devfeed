<?php

namespace Fedn\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

/**
 * Fedn\Models\User
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Fedn\Models\Article[] $articles
 * @property-read \Illuminate\Database\Eloquent\Collection|\Fedn\Models\Quote[] $quotes
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User wherePassword($value)
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User whereRememberToken($value)
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\Fedn\Models\User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class User extends Model implements AuthenticatableContract,
                                    AuthorizableContract,
                                    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    public function articles() {
        return $this->hasMany('Fedn\Models\Article');
    }

    public function quotes() {
        return $this->hasMany('Fedn\Models\Quote');
    }
}