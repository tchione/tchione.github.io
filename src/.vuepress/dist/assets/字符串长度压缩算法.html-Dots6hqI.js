import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as e}from"./app-PMTzUK1j.js";const l={};function p(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="字符串长度压缩算法" tabindex="-1"><a class="header-anchor" href="#字符串长度压缩算法"><span>字符串长度压缩算法</span></a></h1><hr><p>**ps:**根据原地址的py实现</p><p><strong>原地址java实现：</strong><a href="https://blog.csdn.net/lcsy000/article/details/108096039" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/lcsy000/article/details/108096039</a></p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理：</span></a></h2><ul><li>准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串</li><li>缺点（可自行调整代码，现在是2位一压缩）： <ul><li>压缩后的字符串几乎都为“火星文”，这要是存到库了，别人看了还可能以为是脏数据直接给你删掉了 -_-||</li><li>并不是对所有字符都能加密，ascii 码值超过一定值时可能会出错</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>准备两个字符串：a   ,  2</span></span>
<span class="line"><span>字符串a的二进制表示：0b1100001</span></span>
<span class="line"><span>字符串2的二进制表示：0b110010</span></span>
<span class="line"><span>将字符串一左偏移8位得到：0b110000100000000</span></span>
<span class="line"><span>加入字符串二得到：0b110000100110010</span></span>
<span class="line"><span>将得到的新的二进制转换为字符串得到：愲</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="py代码实现" tabindex="-1"><a class="header-anchor" href="#py代码实现"><span>py代码实现：</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def yasuo(s):</span></span>
<span class="line"><span>    res = &#39;&#39;</span></span>
<span class="line"><span>    flag = False</span></span>
<span class="line"><span>    s_l = len(s)</span></span>
<span class="line"><span>    if s_l &amp; 1:</span></span>
<span class="line"><span>        s_l -= 1</span></span>
<span class="line"><span>        flag = True</span></span>
<span class="line"><span>    for i in range(0, s_l, 2):</span></span>
<span class="line"><span>        res += chr((ord(s[i]) &lt;&lt; 8) + ord(s[i+1]))</span></span>
<span class="line"><span>    return res+s[-1] if flag else res</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jieya(s):</span></span>
<span class="line"><span>    res = &#39;&#39;</span></span>
<span class="line"><span>    flag = False</span></span>
<span class="line"><span>    s_l = len(s)</span></span>
<span class="line"><span>    if ord(s[-1])&lt;255:</span></span>
<span class="line"><span>        s_l -= 1</span></span>
<span class="line"><span>        flag = True</span></span>
<span class="line"><span>    for i in range(0, s_l):</span></span>
<span class="line"><span>        data = list(bin(ord(s[i])))[2:]</span></span>
<span class="line"><span>        res += chr(eval(&#39;0b&#39; + &#39;&#39;.join(data[:-8])))</span></span>
<span class="line"><span>        res += chr(eval(&#39;0b&#39; + &#39;&#39;.join(data[-8:])))</span></span>
<span class="line"><span>    return res + s[-1] if flag else res</span></span>
<span class="line"><span>e = yasuo(&#39;abcdddeeeeaabbbcd&#39;)</span></span>
<span class="line"><span># &#39;慢捤摤敥敥慡扢扣d&#39;</span></span>
<span class="line"><span>print(e)</span></span>
<span class="line"><span>f = jieya(e)</span></span>
<span class="line"><span># &#39;abcdddeeeeaabbbcd&#39;</span></span>
<span class="line"><span>print(e)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java代码" tabindex="-1"><a class="header-anchor" href="#java代码"><span>JAVA代码：</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public static String yasuo(String mnw) {</span></span>
<span class="line"><span>    StringBuilder sb = new StringBuilder();</span></span>
<span class="line"><span>    int index = 0;</span></span>
<span class="line"><span>    for (index = 1; index &lt; mnw.length(); index += 2) {</span></span>
<span class="line"><span>        char c1 = mnw.charAt(index - 1);</span></span>
<span class="line"><span>        char c2 = mnw.charAt(index);</span></span>
<span class="line"><span>        sb.append((char) (((int) c1 &lt;&lt; 8) + (int) c2));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (index == mnw.length()) {</span></span>
<span class="line"><span>        sb.append(mnw.charAt(index - 1));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sb.toString();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static String jem(String miw) {</span></span>
<span class="line"><span>    StringBuilder sb = new StringBuilder();</span></span>
<span class="line"><span>    for (int i = 0; i &lt; miw.length(); i++) {</span></span>
<span class="line"><span>        int c = miw.charAt(i);</span></span>
<span class="line"><span>        String binaryString = Integer.toBinaryString(c);</span></span>
<span class="line"><span>        if (binaryString.length() &lt; 8) {</span></span>
<span class="line"><span>            sb.append((char) c);</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        int mnwi1 = Integer.parseInt(binaryString.substring(0, binaryString.length() - 8), 2);</span></span>
<span class="line"><span>        int mnwi2 = Integer.parseInt(binaryString.substring(binaryString.length() - 8), 2);</span></span>
<span class="line"><span>        sb.append((char) mnwi1);</span></span>
<span class="line"><span>        sb.append((char) mnwi2);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return sb.toString();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>    String mnw = &quot;12j3jhk1s-12h3-12j3h712-as2h-23Oas&quot;;</span></span>
<span class="line"><span>    System.out.println(&quot;压缩前：&quot; + mnw + &quot;，长度： &quot; + mnw.length());</span></span>
<span class="line"><span>    String miw = yasuo(mnw);</span></span>
<span class="line"><span>    System.out.println(&quot;压缩后：&quot;+miw +&quot;，长度：&quot;+ miw.length());</span></span>
<span class="line"><span>    String hy = jem(miw);</span></span>
<span class="line"><span>    System.out.println(&quot;还原后：&quot;+hy +&quot;，长度：&quot;+ hy.length());</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=s(l,[["render",p]]),v=JSON.parse('{"path":"/article/code/%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95.html","title":"字符串长度压缩算法","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2021-03-20T00:00:00.000Z","category":["刷题"],"tag":["LeetCode","Python","算法"],"description":"字符串长度压缩算法 **ps:**根据原地址的py实现 原地址java实现：https://blog.csdn.net/lcsy000/article/details/108096039 原理： 准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串 缺点（可自行调整代码，现在是2位一压缩...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/code/%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"Chione"}],["meta",{"property":"og:title","content":"字符串长度压缩算法"}],["meta",{"property":"og:description","content":"字符串长度压缩算法 **ps:**根据原地址的py实现 原地址java实现：https://blog.csdn.net/lcsy000/article/details/108096039 原理： 准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串 缺点（可自行调整代码，现在是2位一压缩..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T05:57:35.000Z"}],["meta",{"property":"article:tag","content":"LeetCode"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2021-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T05:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串长度压缩算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T05:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chione\\",\\"url\\":\\"https://chione.github.io\\"}]}"]]},"git":{"createdTime":1742450255000,"updatedTime":1742450255000,"contributors":[{"name":"wen.tian","username":"wen.tian","email":"tw958658@163.com","commits":1,"url":"https://github.com/wen.tian"}]},"readingTime":{"minutes":1.73,"words":520},"filePathRelative":"article/code/字符串长度压缩算法.md","localizedDate":"2021年3月20日","excerpt":"\\n<hr>\\n<p>**ps:**根据原地址的py实现</p>\\n<p><strong>原地址java实现：</strong><a href=\\"https://blog.csdn.net/lcsy000/article/details/108096039\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/lcsy000/article/details/108096039</a></p>\\n<h2>原理：</h2>\\n<ul>\\n<li>准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串</li>\\n<li>缺点（可自行调整代码，现在是2位一压缩）：\\n<ul>\\n<li>压缩后的字符串几乎都为“火星文”，这要是存到库了，别人看了还可能以为是脏数据直接给你删掉了 -_-||</li>\\n<li>并不是对所有字符都能加密，ascii 码值超过一定值时可能会出错</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,v as data};
