<template><div><h1 id="字符串长度压缩算法" tabindex="-1"><a class="header-anchor" href="#字符串长度压缩算法"><span>字符串长度压缩算法</span></a></h1>
<hr>
<p>**ps:**根据原地址的py实现</p>
<p><strong>原地址java实现：</strong><a href="https://blog.csdn.net/lcsy000/article/details/108096039" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/lcsy000/article/details/108096039</a></p>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理：</span></a></h2>
<ul>
<li>准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串</li>
<li>缺点（可自行调整代码，现在是2位一压缩）：
<ul>
<li>压缩后的字符串几乎都为“火星文”，这要是存到库了，别人看了还可能以为是脏数据直接给你删掉了 -_-||</li>
<li>并不是对所有字符都能加密，ascii 码值超过一定值时可能会出错</li>
</ul>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>准备两个字符串：a   ,  2</span></span>
<span class="line"><span>字符串a的二进制表示：0b1100001</span></span>
<span class="line"><span>字符串2的二进制表示：0b110010</span></span>
<span class="line"><span>将字符串一左偏移8位得到：0b110000100000000</span></span>
<span class="line"><span>加入字符串二得到：0b110000100110010</span></span>
<span class="line"><span>将得到的新的二进制转换为字符串得到：愲</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="py代码实现" tabindex="-1"><a class="header-anchor" href="#py代码实现"><span>py代码实现：</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>def yasuo(s):</span></span>
<span class="line"><span>    res = ''</span></span>
<span class="line"><span>    flag = False</span></span>
<span class="line"><span>    s_l = len(s)</span></span>
<span class="line"><span>    if s_l &#x26; 1:</span></span>
<span class="line"><span>        s_l -= 1</span></span>
<span class="line"><span>        flag = True</span></span>
<span class="line"><span>    for i in range(0, s_l, 2):</span></span>
<span class="line"><span>        res += chr((ord(s[i]) &#x3C;&#x3C; 8) + ord(s[i+1]))</span></span>
<span class="line"><span>    return res+s[-1] if flag else res</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def jieya(s):</span></span>
<span class="line"><span>    res = ''</span></span>
<span class="line"><span>    flag = False</span></span>
<span class="line"><span>    s_l = len(s)</span></span>
<span class="line"><span>    if ord(s[-1])&#x3C;255:</span></span>
<span class="line"><span>        s_l -= 1</span></span>
<span class="line"><span>        flag = True</span></span>
<span class="line"><span>    for i in range(0, s_l):</span></span>
<span class="line"><span>        data = list(bin(ord(s[i])))[2:]</span></span>
<span class="line"><span>        res += chr(eval('0b' + ''.join(data[:-8])))</span></span>
<span class="line"><span>        res += chr(eval('0b' + ''.join(data[-8:])))</span></span>
<span class="line"><span>    return res + s[-1] if flag else res</span></span>
<span class="line"><span>e = yasuo('abcdddeeeeaabbbcd')</span></span>
<span class="line"><span># '慢捤摤敥敥慡扢扣d'</span></span>
<span class="line"><span>print(e)</span></span>
<span class="line"><span>f = jieya(e)</span></span>
<span class="line"><span># 'abcdddeeeeaabbbcd'</span></span>
<span class="line"><span>print(e)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java代码" tabindex="-1"><a class="header-anchor" href="#java代码"><span>JAVA代码：</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>public static String yasuo(String mnw) {</span></span>
<span class="line"><span>    StringBuilder sb = new StringBuilder();</span></span>
<span class="line"><span>    int index = 0;</span></span>
<span class="line"><span>    for (index = 1; index &#x3C; mnw.length(); index += 2) {</span></span>
<span class="line"><span>        char c1 = mnw.charAt(index - 1);</span></span>
<span class="line"><span>        char c2 = mnw.charAt(index);</span></span>
<span class="line"><span>        sb.append((char) (((int) c1 &#x3C;&#x3C; 8) + (int) c2));</span></span>
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
<span class="line"><span>    for (int i = 0; i &#x3C; miw.length(); i++) {</span></span>
<span class="line"><span>        int c = miw.charAt(i);</span></span>
<span class="line"><span>        String binaryString = Integer.toBinaryString(c);</span></span>
<span class="line"><span>        if (binaryString.length() &#x3C; 8) {</span></span>
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
<span class="line"><span>    String mnw = "12j3jhk1s-12h3-12j3h712-as2h-23Oas";</span></span>
<span class="line"><span>    System.out.println("压缩前：" + mnw + "，长度： " + mnw.length());</span></span>
<span class="line"><span>    String miw = yasuo(mnw);</span></span>
<span class="line"><span>    System.out.println("压缩后："+miw +"，长度："+ miw.length());</span></span>
<span class="line"><span>    String hy = jem(miw);</span></span>
<span class="line"><span>    System.out.println("还原后："+hy +"，长度："+ hy.length());</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


