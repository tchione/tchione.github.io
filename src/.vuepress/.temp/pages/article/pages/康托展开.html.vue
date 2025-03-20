<template><div><h1 id="康托展开" tabindex="-1"><a class="header-anchor" href="#康托展开"><span>康托展开</span></a></h1>
<hr>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述：</span></a></h3>
<ul>
<li><strong>官方概述：</strong>
<ul>
<li>康托展开是一个全排列到一个自然数的双射，常用于构建哈希表时的空间压缩。 康托展开的实质是计算当前排列在所有由小到大全排列中的顺序，因此是可逆的。</li>
</ul>
</li>
<li><strong>通俗介绍：</strong>
<ul>
<li>康托展开可以求解一个排列的序号，比如：12345 序号为 1  ，12354序号为2，按字典序增加编号递增，依次类推。康托逆展开可以求解一个序号它对应的排列是什么</li>
</ul>
</li>
<li><strong>逆康托展开通俗介绍：</strong>
<ul>
<li>就是通过序号求解得到 -&gt; 自然数的全排列（从小到大）的序列</li>
</ul>
</li>
</ul>
<h3 id="公式" tabindex="-1"><a class="header-anchor" href="#公式"><span>公式：</span></a></h3>
<ul>
<li><code v-pre>X = An * (n-1)! + An-1 * (n-2)! + ... + A1 * 0!</code></li>
<li>X为顺序全排列的序号，An表示比当前数小的数字有几个，（n-1)!表示剩余数字的全排列，(大写A旁边的小写字母为下标)</li>
</ul>
<h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析：</span></a></h3>
<ul>
<li>
<p><strong>拿52413举例子：</strong></p>
<ol>
<li>
<p>首先看第一个数 5，不管第一位是什么数，后面都有四位数，那么这四位数全排列的方式有 4！种，而如果第一位是 1 或 2 或 3 或 4 都会比5开头的字典序要小，所以可以令1，2，3，4分别作为开头，这样的话就会有 4 * 4！种排法要比  52413这种排法的字典序要小。</p>
<p>那么第一个数是1，2，3，4时候的字典序的个数数完了是 4 * 4！ 种，且这些字典序都要比52413的字典序要小。</p>
<p>还有其他的排列方式比52413的字典序要小的吗？</p>
</li>
<li>
<p>那么就可以固定第一位5，找下一位2，这时5已经用过了，所以从剩下的 1，2，3，4 里挑选比2小的数，一共1个，后面还剩三位，也就是3！种排列方式，那么这时候比 52413 字典序要小的又有  1 * 3！种，也就是当5在第一位，1在第二位的时候。</p>
</li>
<li>
<p>再看第三位4，这时5，2都用了，所以从剩下的 1，3，4三个数中找比4小的数的个数，有两个比4小原理同上，所以这时候也可以有 2 * 2!种排列方式的字典序小于 52413</p>
</li>
<li>
<p>再看第四位1，这时候会有 0 * 1！种</p>
</li>
<li>
<p>再看第五位3，这时候会有0 * 0！种</p>
</li>
</ol>
</li>
<li>
<p><strong>综上所述：</strong></p>
<ul>
<li>对于序列： 52413 该序列展开后为： 4 * 4! + 1 * 3! + 2 * 2! + 0 * 1! + 0 * 0! ，计算结果是： 106</li>
<li>由于是从0开始计数的，所以最后 52413 的编号为 107</li>
</ul>
</li>
<li>
<p><strong>可以这样看：</strong></p>
<ul>
<li>我现在让你求12345的康托展开值，也就是：0<em>4！+ 0</em>3！+ 0<em>2！+ 0</em>1！+0*0！ =  0 所以明白了吧~~<br>
康托公式最小字典序的编号就是0。</li>
</ul>
</li>
</ul>
<h3 id="逆康托展开解析" tabindex="-1"><a class="header-anchor" href="#逆康托展开解析"><span>逆康托展开解析：</span></a></h3>
<ul>
<li>
<p><strong>栗子：</strong></p>
<ol>
<li>
<p>如果初始序列是12345（第一个），让你求第107个序列是什么。（按字典序递增）</p>
</li>
<li>
<p>这样计算：</p>
</li>
<li>
<p>先把107减1，因为康托展开里的初始序列编号为0<br>
然后计算下后缀积：</p>
</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>1     2     3    4    5</span></span>
<span class="line"><span>5！   4！   3！   2！  1！ 0!</span></span>
<span class="line"><span>120   24    6    2    1   1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>106 /  4! = 4 ······ 10 有4个比它小的所以因该是5   从（1，2，3，4，5）里选</span></span>
<span class="line"><span>10   /  3!  = 1 ······ 4  有1个比它小的所以因该是2   从（1， 2， 3， 4）里选</span></span>
<span class="line"><span> 4    /  2!  = 2 ······ 0  有2个比它小的所以因该是4   从（1， 3， 4）里选</span></span>
<span class="line"><span> 0    /  1!  = 0 ······ 0  有0个比它小的所以因该是1   从（1，3）里选</span></span>
<span class="line"><span> 0    /  0!  = 0 ······ 0  有0个比它小的所以因该是3   从（3）里选</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 所以编号107的是 52413</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


