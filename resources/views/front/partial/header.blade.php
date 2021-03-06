<div class="header_wp">
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <h1 class="logo"><a href="{{ route('front.home') }}" title="DevFeed首页">DevFeed</a></h1>
            </div>
            <div class="col-md-7 nav-area" id="navArea">
                <ul class="header_nav">
                    <li class="{{ URL::current() == route('front.home') ? 'current' : ' ' }}"><a href="{{ route('front.home') }}" title="首页">首页</a></li>
                    {{--<li><a href="#" title="专题">专题</a></li>--}}
                    <li class="{{ URL::current() == route('front.tag.index') || URL::current() == @route('front.tag.detail', $nowId) ? 'current' : ' ' }}"><a href="{{route('front.tag.index')}}" title="标签">标签</a></li>
                    <li class="{{ URL::current() == route('front.feed.list') || URL::current() == @route('front.feed.view', $nowId) ? 'current' : ' '  }}"><a href="{{route('front.feed.list')}}" title="前端聚合">前端聚合</a></li>
                    @if (Auth::guest())
                        <li>{{ link_to('/login', '登录') }}</li>
                    @endif
                    @can('admin')
                        <li>{{ link_to_route('admin.home', '后台管理') }}</li>
                    @endcan
                </ul>
            </div>
            <div class="col-md-3 search">
                <div class="header_search_box">
                    <form>
                        <input type="text" name="" class="header_search_input"/>
                        <span class="header_search_submit">提交</span>
                    </form>
                </div>
            </div>
            <a href="javascript:void(0);" class="menu-more" id="moreBtn"></a>
        </div>
    </div>
</div>
<!-- header end -->
