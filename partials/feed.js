<div class="feed-container standard-center">

    <div class="feed-left">

        <div class="feed-title">Videos</div>
        <div class="feed-section" ng-repeat="section in sections">
        
            <div class="feed-divider"></div>
    
            <div class="feed-section-title" ng-class="{premium: section.name == 'Premium'}">{{section.name}}</div>
            
            <div class="feed-video" ng-repeat="video in section.videos track by $index">

                <a ng-href="{{video.href}}">
                    <img class="feed-video-thumbnail" ng-src="{{video.thumbnail}}" />
                </a>
                
                <a ng-href="{{video.href}}">
                    <div class="feed-video-title">{{video.name}}</div>
                </a>
                
                <div class="feed-video-views">VIEWS: {{video.views}}</div>
             </div>
        </div>
    </div>
    
    <div class="feed-right">
        
        <div class="news-title">News</div>
        
        <div class="news-container">
        
            <a ng-href="{{article.href}}" class="news-item" ng-repeat="article in news">
                
                <div class="news-headline">{{article.headline}}</div>
                <div class="news-summary">{{article.summary}}</div>
                
            </a>
        
        </div>

    </div>

</div>
