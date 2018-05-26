<template>
  <textarea class="form-control" id="code" name="code"></textarea>
</template>
<script>
import CodeMirror from 'codemirror/lib/codemirror'
export default {
  mounted(){
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                mode: "text/javascript",    //实现groovy代码高亮
                // mode: "text/x-java", //实现Java代码高亮
                lineNumbers: true,	//显示行号
                // theme: "eclipse",	//设置主题
                // theme: "idea",	//设置主题
                theme: "dracula",	//设置主题
                lineWrapping: true,	//代码折叠
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                matchBrackets: true,	//括号匹配
                //readOnly: true,        //只读
            });
  }
}
</script>

