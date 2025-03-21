import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as i}from"./app-PMTzUK1j.js";const l={};function p(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="单调栈" tabindex="-1"><a class="header-anchor" href="#单调栈"><span>单调栈</span></a></h1><hr><p><em>ps : <code>有错误还请指教</code></em></p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义：</span></a></h3><p>1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。</p><p>2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈</p><ul><li>单调递增栈：栈内数据序列为单调递增序列</li><li>单调递减栈：栈内数据序列为单调递减序列</li></ul><p>3、结论：利用单调栈，可以找到从左/右遍历第一个比它小/大的元素的位置</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例：</span></a></h3><p>1、<em>leetcode739：</em></p><ul><li><p>题目描述：</p><ul><li>请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。</li><li>例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。</li><li><em>提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。</em></li></ul></li><li><p>解答：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def leetcode(T):</span></span>
<span class="line"><span># 可以维护一个存储下标的单调栈，从栈底到栈顶的下标对应的温度列表中的温度依次递减。</span></span>
<span class="line"><span># 如果一个下标在单调栈里，则表示尚未找到下一次温度更高的下标</span></span>
<span class="line"><span>res = [0 for i in range(len(T))]</span></span>
<span class="line"><span>data = []</span></span>
<span class="line"><span>for i, j in enumerate(T):</span></span>
<span class="line"><span>    #这里while比较查找当前元素与上一个栈内元素的大小</span></span>
<span class="line"><span>    #小于说明栈内最后一个元素找到了比自身大的最接近元素，按下表相减赋值给res</span></span>
<span class="line"><span>    while data and T[data[-1]] &lt; j:</span></span>
<span class="line"><span>            res[data[-1]] = i-data[-1]</span></span>
<span class="line"><span>            data.pop()</span></span>
<span class="line"><span>    #当前元素比栈内元素都小，入栈，继续遍历</span></span>
<span class="line"><span>    data.append(i)</span></span>
<span class="line"><span>return res</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>2、<em>leetcode496：</em></p><ul><li><p>题目描述：</p><ul><li>给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。</li><li>nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: nums1 = [4,1,2], nums2 = [1,3,4,2].</span></span>
<span class="line"><span>输出: [-1,3,-1]</span></span>
<span class="line"><span>解释:</span></span>
<span class="line"><span>	对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。</span></span>
<span class="line"><span>	对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。</span></span>
<span class="line"><span>	对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解答：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def leetcode(nums1, nums2):</span></span>
<span class="line"><span>    res = {}</span></span>
<span class="line"><span>    # 创建一个单调递减栈</span></span>
<span class="line"><span>    stacks = []</span></span>
<span class="line"><span>    #优先遍历大数组，找出最近的下一个最大值，存入hash字典</span></span>
<span class="line"><span>    for i in nums2:</span></span>
<span class="line"><span>        while stacks and stacks[-1] &lt; i:</span></span>
<span class="line"><span>            res[stacks.pop()] = i</span></span>
<span class="line"><span>        stacks.append(i)</span></span>
<span class="line"><span>    # 遍历大数组的子集，找到对应值，若没有就显示-1</span></span>
<span class="line"><span>    return [res.get(j, -1) for j in nums1]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、<em>leetcode503：</em></p><ul><li><p>题目描述：</p><ul><li>给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入: [1,2,1]</span></span>
<span class="line"><span>输出: [2,-1,2]</span></span>
<span class="line"><span>解释: 第一个 1 的下一个更大的数是 2；</span></span>
<span class="line"><span>数字 2 找不到下一个更大的数； </span></span>
<span class="line"><span>第二个 1 的下一个最大的数需要循环搜索，结果也是 2。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解答：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>def leetcode(nums):</span></span>
<span class="line"><span>    #可以维护一个存储下标的单调栈。存下表是因为值会重复</span></span>
<span class="line"><span>    res = [-1 for i in range(len(nums))]</span></span>
<span class="line"><span>    stacks = []</span></span>
<span class="line"><span>    #直接遍历2个nums，因为第二个要得到的是值不是下标，所以第二个nums的下标可以忽略</span></span>
<span class="line"><span>    for i,j in enumerate(nums+nums):</span></span>
<span class="line"><span>        #找到比栈内最后一个元素大的值，在下标栈中替换，并在单调栈中删除</span></span>
<span class="line"><span>        while stacks and nums[stacks[-1]] &lt; j:</span></span>
<span class="line"><span>            res[stacks[-1]] = j</span></span>
<span class="line"><span>            stacks.pop()</span></span>
<span class="line"><span>        #将当前数字的下表加入栈</span></span>
<span class="line"><span>        if i &lt; len(nums):</span></span>
<span class="line"><span>            stacks.append(i)</span></span>
<span class="line"><span>    return res</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,16)]))}const c=n(l,[["render",p]]),m=JSON.parse('{"path":"/article/code/leetcode%E5%8D%95%E8%B0%83%E6%A0%88.html","title":"单调栈","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2021-03-20T00:00:00.000Z","category":["刷题"],"tag":["LeetCode","Python","算法"],"description":"单调栈 ps : 有错误还请指教 定义： 1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。 2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈 单调递增栈：栈内数据序列为单调...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/code/leetcode%E5%8D%95%E8%B0%83%E6%A0%88.html"}],["meta",{"property":"og:site_name","content":"Chione"}],["meta",{"property":"og:title","content":"单调栈"}],["meta",{"property":"og:description","content":"单调栈 ps : 有错误还请指教 定义： 1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。 2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈 单调递增栈：栈内数据序列为单调..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T05:57:35.000Z"}],["meta",{"property":"article:tag","content":"LeetCode"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2021-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T05:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单调栈\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T05:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chione\\",\\"url\\":\\"https://chione.github.io\\"}]}"]]},"git":{"createdTime":1742450255000,"updatedTime":1742450255000,"contributors":[{"name":"wen.tian","username":"wen.tian","email":"tw958658@163.com","commits":1,"url":"https://github.com/wen.tian"}]},"readingTime":{"minutes":3.84,"words":1152},"filePathRelative":"article/code/leetcode单调栈.md","localizedDate":"2021年3月20日","excerpt":"\\n<hr>\\n<p><em>ps : <code>有错误还请指教</code></em></p>\\n<h3>定义：</h3>\\n<p>1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。</p>\\n<p>2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈</p>\\n<ul>\\n<li>单调递增栈：栈内数据序列为单调递增序列</li>\\n<li>单调递减栈：栈内数据序列为单调递减序列</li>\\n</ul>\\n<p>3、结论：利用单调栈，可以找到从左/右遍历第一个比它小/大的元素的位置</p>","autoDesc":true}');export{c as comp,m as data};
