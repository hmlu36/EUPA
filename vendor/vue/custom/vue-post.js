Vue.component("v-post", {
    props: ['post'],
    template: [
        "<div class='col-lg-4 col-sm-6 text-center mb-4'>                                 ",
        "     <div class='thumbnail'>                                                     ",
        "         <img class='img-fluid d-block mx-auto' v-bind:src='post.path' v-on:click='popMessage(post.mold)' alt=' '>  ",
        "     </div>                                                                      ",
        "     <p>{{post.title}}</p>                                                     ",
        "     <p style='white-space: pre'>{{post.content}}</p>                            ",
        "</div>                                                                           "
    ].join(""),
    methods: {
        popMessage(mold) {

            let $element =
                '<div class="article-read text-left">                                                        ' +
                '    <div class="article-read-inner">                                                        ' +
                '        <div class="article-back">                                                          ' +
                '            <a class="btn btn-outline-primary"><i class="ion ion-chevron-left"></i> Back</a>' +
                '        </div>                                                                              ' +
                ' <div class="tab" role="tabpanel">                                                                                                    ' +
                ' <!-- Nav tabs -->                                                                                                                    ' +
                ' <ul class="nav nav-tabs" role="tablist">                                                                                             ' +
                ' 	<li role="presentation"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">功能</a></li>                   ' +
                ' 	<li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">食譜</a></li>                ' +
                ' 	<li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">設計</a></li>               ' +
                ' 	<li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">故事</a></li>               ' +
                ' 	<li role="presentation"><a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab">規格</a></li>               ' +
                ' </ul>                                                                                                                                ' +
                ' <!-- Tab panes -->                                                                                                                   ' +
                ' <div class="tab-content tabs">                                                                                                       ' +
                ' 	<div role="tabpanel" class="tab-pane fade in active" id="Section1">                                                                ' +
                '        <h1 class="article-title">{title}</h1>                                              ' +
                '        <img src="{path}">                                                                  ' +
                '        <div class="article-content">                                                       ' +
                '        　　　　<p style="white-space: pre">{content}</p>                                    ' +
                '        </div>                                                                              ' +
                ' 	</div>                                                                                                                             ' +
                ' 	<div role="tabpanel" class="tab-pane fade" id="Section2">                                                                          ' +
                ' 		<h3>Section 2</h3>                                                                                                             ' +
                ' 		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>' +
                ' 	</div>                                                                                                                             ' +
                ' 	<div role="tabpanel" class="tab-pane fade" id="Section3">                                                                          ' +
                ' 		<h3>Section 3</h3>                                                                                                             ' +
                ' 		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>' +
                ' 	</div>                                                                          ' +
                ' 	<div role="tabpanel" class="tab-pane fade" id="Section4">                                                                          ' +
                ' 		<h3>Section 4</h3>                                                                          ' +
                ' 		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>' +
                ' 	</div>                                                                          ' +
                ' 	<div role="tabpanel" class="tab-pane fade" id="Section5">                                                                          ' +
                ' 		<h3>Section 5</h3>                                                                          ' +
                ' 		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>' +
                ' 	</div>                                                                          ' +

                ' </div>                                                                            ' +

                '    </div>                                                                                  ' +
                '</div>                                                                                      ';
            var url = "mock/" + mold + ".json";
            //alert(url);
            $.ajax({
                url: url,
                dataType: 'json',
                success: function(data) {
                    let reg = /{([a-zA-Z0-9]+)}/g,
                        res = [],
                        element = $element;
                    while (match = reg.exec($element)) {
                        element = element.replace('{' + match[1] + '}', data[match[1]]);
                    }

                    $.blockUI({
                        message: element,
                        css: {
                            top: 0,
                            left: 0,
                            width: $(window).width(),
                            height: $(window).height(),
                            overflow: 'scroll',
                            cursor: 'default'
                        }
                    });
                    $("nav").hide();

                    $(".article-read").fadeIn();
                    $(document).on("click", ".article-back .btn", function() {
                        $(".article-read").fadeOut(function() {
                            $(".article-read").remove();
                            $("nav").show();
                            $.unblockUI();
                        });
                        return false;
                    });
                }
            });
        }
    }
});