﻿Vue.component("v-post", {
    props: ['post'],
    template: [
        "<div class='col-lg-4 col-sm-6 text-center mb-4'>                                                                          ",
        "     <div class='thumbnail'>                                                                                              ",
        "         <img class='img-fluid d-block mx-auto col-6' v-bind:src='post.path' v-on:click='popMessage(post.mold)' alt=' '>  ",
        "     </div>                                                                                                               ",
        "     <p>{{post.title}}</p>                                                                                                ",
        "     <p style='white-space: pre'>{{post.content}}</p>                                                                     ",
        "</div>                                                                                                                    "
    ].join(""),
    methods: {
        popMessage(mold) {

            let $element =
                '<div class="article-read text-left">                                                                                 ' +
                '    <div class="article-read-inner">                                                                                 ' +
                '        <div class="article-back">                                                                                   ' +
                '            <a class="btn btn-outline-primary"><i class="ion ion-chevron-left"></i> Back</a>                         ' +
                '        </div>                                                                                                       ' +
                '       <div class="tab">                                                                                             ' +
                '           <div class="d-flex justify-content-center">                                                               ' +
                '               <ul class="nav nav-tabs mb-4 justify-content-center">                                                 ' +
                '                   <li class="nav-item"><a class="nav-link" href="#Section1" data-toggle="tab">功能</a></li>         ' +
                '                   <li class="nav-item"><a class="nav-link" href="#Section2" data-toggle="tab">食譜</a></li>         ' +
                '                   <li class="nav-item"><a class="nav-link" href="#Section3" data-toggle="tab">設計</a></li>         ' +
                '                   <li class="nav-item"><a class="nav-link" href="#Section4" data-toggle="tab">故事</a></li>         ' +
                '                   <li class="nav-item"><a class="nav-link" href="#Section5" data-toggle="tab">規格</a></li>         ' +
                '               </ul>                                                                                                 ' +
                '           </div>                                                                                                    ' +
                '       </div>                                                                                                        ' +
                '       <div class="tab-content post-content">                                                                        ' +
                '           <div class="tab-pane" id="Section1">                                                                      ' +
                '               <div class="row my-4">                                                                                     ' +
                '                   <div class="col-lg-8 text-right">                                                                 ' +
                '                       <img class="img-fluid" src="{path}">                                                          ' +
                '                   </div>                                                                                            ' +
                '                   <div class="col-lg-4">                                                                            ' +
                '                       <h3>{title}</h3>                                                          ' +
                '                       <p style="white-space: pre">{content}</p>                                 ' +
                '                   </div>                                                                                            ' +
                '               </div>                                                                                                ' +
                '           </div>                                                                                                    ' +
                '           <div class="tab-pane" id="Section2">                                                                      ' +
                '               <div class="row my-4">                                                                                     ' +
                '                   <div class="col-lg-8 text-right">                                                                 ' +
                '                       <img class="img-fluid" src="{recipePath}">                                                    ' +
                '                   </div>                                                                                            ' +
                '                   <div class="col-lg-4">                                                                            ' +
                '                       <h3>{recipeTitle}</h3> <br/>                                                                       ' +
                '                       <p style="white-space: pre">{recipeContent}</p>                                               ' +
                '                   </div>                                                                                            ' +
                '               </div>                                                                                                ' +
                '           </div>                                                                                                    ' +
                '           <div class="tab-pane" id="Section3">                                                                      ' +
                '               <div class="row my-4">                                                                                     ' +
                '                   <div class="col-lg-8 text-right">                                                                 ' +
                '                       <img class="img-fluid" src="{designPath}">                                                    ' +
                '                   </div>                                                                                            ' +
                '                   <div class="col-lg-4">                                                                            ' +
                '                       <h3>{designTitle}</h3>                                                    ' +
                '                       <p style="white-space: pre">{designContent}</p>                           ' +
                '                   </div>                                                                                            ' +
                '               </div>                                                                                                ' +
                '           </div>                                                                                                    ' +
                '           <div class="tab-pane" id="Section4">                                                                      ' +
                '               <div class="row my-4">                                                                                     ' +
                '                   <div class="col-lg-8 text-right">                                                                 ' +
                '                       <img class="img-fluid" src="{storyPath}">                                                     ' +
                '                   </div>                                                                                            ' +
                '                   <div class="col-lg-4">                                                                            ' +
                '                       <h3>{storyTitle}</h3>                                                     ' +
                '                       <p style="white-space: pre">{storyContent}</p>                            ' +
                '                   </div>                                                                                            ' +
                '               </div>                                                                                                ' +
                '           </div>                                                                                                    ' +
                '           <div class="tab-pane" id="Section5">                                                                      ' +
                '               <div class="row my-4">                                                                                     ' +
                '                   <div class="col-lg-8 text-right">                                                                 ' +
                '                       <img class="img-fluid" src="{specPath}">                                                      ' +
                '                   </div>                                                                                            ' +
                '                   <div class="col-lg-4">                                                                            ' +
                '                       <h3>{specTitle}</h3>                                                      ' +
                '                       <p style="white-space: pre">{specContent}</p>                             ' +
                '                   </div>                                                                                            ' +
                '               </div>                                                                                                ' +
                '           </div>                                                                                                    ' +
                '       </div>                                                                                                        ' +
                '    </div>                                                                                                           ' +
                '</div>                                                                                                               ' +
                '<script>$(".nav-tabs a[href=\'#Section1\']").tab("show"); </script>';
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
    },
    created() {

    }
});