Vue.component("v-post", {
    props: ['post'],
    template: [
        "<div class='col-lg-4 col-sm-6 text-center mb-4'>                                 ",
        "     <div class='thumbnail'>                                                     ",
        "         <img class='img-fluid d-block mx-auto' v-bind:src='post.path' alt=' '>  ",
        "     </div>                                                                      ",
        "     <p>{{post.title}}</p>                                                     ",
        "     <p style='white-space: pre'>{{post.content}}</p>                            ",
        "</div>                                                                           "
    ].join("")
});