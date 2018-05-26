<template>
  <div v-highlight>
    <pre>
                <code class="lang-javascript">
        {{desc}}
                </code>
            </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      desc:
        "function init(){\n" +
        "            $scope.req.getArticle();\n" +
        "            $('pre code').each(function(i, block) {\n" +
        "                hljs.highlightBlock(block);\n" +
        "            });\n" +
        "        }"
    };
  }
};
</script>

