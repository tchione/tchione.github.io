import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as i}from"./app-PMTzUK1j.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="并查集" tabindex="-1"><a class="header-anchor" href="#并查集"><span>并查集</span></a></h1><hr><p><strong>ps : <code>有错误还请指教</code></strong></p><h3 id="定义-百度的" tabindex="-1"><a class="header-anchor" href="#定义-百度的"><span>定义(百度的)：</span></a></h3><ul><li>并查集，在一些有N个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，其间要反复查找一个元素在哪个集合中。这一类问题近几年来反复出现在信息学的国际国内赛题中，其特点是看似并不复杂，但数据量极大，若用正常的数据结构来描述的话，往往在空间上过大，计算机无法承受；即使在空间上勉强通过，运行的时间复杂度也极高，根本就不可能在比赛规定的运行时间（1～3秒）内计算出试题需要的结果，只能用并查集来描述。</li><li>并查集是一种树型的数据结构，用于处理一些不相交集合（disjoint sets）的合并及查询问题。常常在使用中以森林来表示。</li></ul><ol><li>并查集是一种数据结构</li><li>并查集这三个字，一个字代表一个意思。</li><li>并（Union），代表合并</li><li>查（Find），代表查找</li><li>集（Set），代表这是一个以字典为基础的数据结构，它的基本功能是合并集合中的元素，查找集合中的元素</li><li>并查集的典型应用是有关连通分量的问题</li><li>并查集解决单个问题（添加，合并，查找）的时间复杂度都是O(1)O(1)</li><li>因此，并查集可以应用到在线算法中</li></ol><h3 id="python模板" tabindex="-1"><a class="header-anchor" href="#python模板"><span>python模板：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 创建并查集类</span></span>
<span class="line"><span>class UnionFind:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        记录每个节点的父节点</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        self.father = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def find(self, x):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        查找根节点</span></span>
<span class="line"><span>        路径压缩</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        root = x</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>		 # 循环查找根节点</span></span>
<span class="line"><span>        while self.father[root] != None:</span></span>
<span class="line"><span>            root = self.father[root]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 路径压缩</span></span>
<span class="line"><span>        while x != root:</span></span>
<span class="line"><span>            original_father = self.father[x]</span></span>
<span class="line"><span>            self.father[x] = root</span></span>
<span class="line"><span>            x = original_father</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def merge(self, x, y, val):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        合并两个节点</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        # 查找两节点根节点是否相同</span></span>
<span class="line"><span>        root_x, root_y = self.find(x), self.find(y)</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>		 # 根节点不相同则合并根节点</span></span>
<span class="line"><span>        if root_x != root_y:</span></span>
<span class="line"><span>            self.father[root_x] = root_y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def is_connected(self, x, y):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        判断两节点是否相连</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        return self.find(x) == self.find(y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def add(self, x):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        添加新节点</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        if x not in self.father:</span></span>
<span class="line"><span>            self.father[x] = None</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const c=s(l,[["render",p]]),o=JSON.parse('{"path":"/article/code/%E5%B9%B6%E6%9F%A5%E9%9B%86.html","title":"并查集","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2021-03-20T00:00:00.000Z","category":["刷题"],"tag":["LeetCode","Python","算法"],"description":"并查集 ps : 有错误还请指教 定义(百度的)： 并查集，在一些有N个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，其间要反复查找一个元素在哪个集合中。这一类问题近几年来反复出现在信息学的国际国内赛题中，其特点是看似并不复杂，但数据量极大，若用正常的数据结构来描述的话，往往在空...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/code/%E5%B9%B6%E6%9F%A5%E9%9B%86.html"}],["meta",{"property":"og:site_name","content":"Chione"}],["meta",{"property":"og:title","content":"并查集"}],["meta",{"property":"og:description","content":"并查集 ps : 有错误还请指教 定义(百度的)： 并查集，在一些有N个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，其间要反复查找一个元素在哪个集合中。这一类问题近几年来反复出现在信息学的国际国内赛题中，其特点是看似并不复杂，但数据量极大，若用正常的数据结构来描述的话，往往在空..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T05:57:35.000Z"}],["meta",{"property":"article:tag","content":"LeetCode"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2021-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T05:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并查集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T05:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chione\\",\\"url\\":\\"https://chione.github.io\\"}]}"]]},"git":{"createdTime":1742450255000,"updatedTime":1742450255000,"contributors":[{"name":"wen.tian","username":"wen.tian","email":"tw958658@163.com","commits":1,"url":"https://github.com/wen.tian"}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"article/code/并查集.md","localizedDate":"2021年3月20日","excerpt":"\\n<hr>\\n<p><strong>ps : <code>有错误还请指教</code></strong></p>\\n<h3>定义(百度的)：</h3>\\n<ul>\\n<li>并查集，在一些有N个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，其间要反复查找一个元素在哪个集合中。这一类问题近几年来反复出现在信息学的国际国内赛题中，其特点是看似并不复杂，但数据量极大，若用正常的数据结构来描述的话，往往在空间上过大，计算机无法承受；即使在空间上勉强通过，运行的时间复杂度也极高，根本就不可能在比赛规定的运行时间（1～3秒）内计算出试题需要的结果，只能用并查集来描述。</li>\\n<li>并查集是一种树型的数据结构，用于处理一些不相交集合（disjoint sets）的合并及查询问题。常常在使用中以森林来表示。</li>\\n</ul>","autoDesc":true}');export{c as comp,o as data};
