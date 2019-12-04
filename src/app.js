import tinymce from 'tinymce'

import 'tinymce/themes/inlite'
import 'tinymce/themes/modern'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/table'
import 'tinymce/plugins/wordcount'
import "tinymce-a11y-checker"
import "tinymce/plugins/preview"
import "tinymce/plugins/image"
import "tinymce/plugins/emoticons"
import "tinymce/plugins/textcolor"
import "tinymce/plugins/insertdatetime"
import "tinymce/plugins/charmap"
import "tinymce/plugins/media"
import "tinymce/plugins/textpattern"


tinymce.init({
    selector: 'textarea',
    skin: false,
    plugins: ['paste link autoresize table wordcount a11y_checker','textpattern' , 'media', 'charmap', 'a11y_checker', 'preview', 'image', 'emoticons', 'textcolor', 'insertdatetime'],
    setup: function (ed) {
        ed.addButton('example', {
            title: 'exampleTitle',
            text: 'link rule',
            onclick: function (ed) {

                var ele = tinyMCE.activeEditor.dom.get('editor');
                var list = tinyMCE.get('textarea1').dom.select("A");
                for (var i = 0; i < list.length; i++) {

                    var attr = list[i].getAttribute("aria-label");
                    if (attr == null || attr.trim() == "") {
                        var linkes = (list[i].getAttribute("href"));
                        var aria = prompt("Please enter a tag aria-label attribute. The a tag is link to " + linkes);
                        if (aria != null) {
                            list[i].setAttribute("aria-label", aria);
                        }
                    }
                }
            }
        });
        ed.addButton('title',{
            title: 'Title0,',
            text: 'Title rule',
            onclick: function (ed) {
                console.log(document.title);
                var tit = document.title;
                if (tit == null || tit.trim() == ""){
                    var newtit = prompt("Please enter the title.");
                    if (newtit != null){
                        document.title = newtit;
                    }
                }
            }
        })
    },

    toolbar: "a11ycheck | check_a11y | textpattern | charmap | insertdatetime | insertfile undo redo | styleselect | bold italic | bullist,numlist,|formatselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor | emoticons, | fontsizeselect | example | title"
	
	});

// Initialize
tinymce.init({
    selector: '.editor',
    theme: 'inlite',
    inline: true,
    setup(editor) {
        editor.on('keyup', e => console.log(editor.getContent()))
    }
});
