<script lang="ts">
    const str: string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>
    {@html str}
</p>


<span>
    在将表达式的输出插入到 DOM 之前，Svelte 不会对 @html ... 内的表达式的输出做任何清理的。换言之，如果使用此功能，则必须手动转义来自不信任源的 HTML 代码，否则会使用户面临 XSS 攻击的风险。
</span>