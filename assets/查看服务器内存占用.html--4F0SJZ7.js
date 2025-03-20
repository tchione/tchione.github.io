import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,o as i}from"./app-CLMdb5Qr.js";const o={};function n(d,e){return i(),a("div",null,e[0]||(e[0]=[l(`<h1 id="查看服务器内存占用" tabindex="-1"><a class="header-anchor" href="#查看服务器内存占用"><span>查看服务器内存占用</span></a></h1><hr><h3 id="查看所有mysql数据库内存占用" tabindex="-1"><a class="header-anchor" href="#查看所有mysql数据库内存占用"><span>查看所有mysql数据库内存占用：</span></a></h3><pre><code>select 
TABLE_SCHEMA, 
concat(truncate(sum(data_length)/1024/1024,2),&#39; MB&#39;) as data_size,
concat(truncate(sum(index_length)/1024/1024,2),&#39;MB&#39;) as index_size
from information_schema.tables
group by TABLE_SCHEMA
ORDER BY data_size desc;
</code></pre><h3 id="linux内存查看" tabindex="-1"><a class="header-anchor" href="#linux内存查看"><span>linux内存查看：</span></a></h3><ul><li><code>ls -lht </code>: 查看文件大小</li><li><code>du --max-depth=1 -h</code>： 查看当前文件夹下每个文件夹的内存占用</li><li><code>du -sh /usr</code>: 查看单个文件夹内存</li><li><code>df -h</code>: 查看全部磁盘内存</li><li><code> lsof |grep deleted(文件名)</code>: 查看使用文件的进程</li></ul><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL:</span></a></h3><ul><li>删库：<code>drop database &lt;数据库名&gt;;</code></li><li>删表： <code>DROP TABLE &lt;数据表名&gt; ;</code></li><li>更新表数据：<code>UPDATE &lt;数据表名&gt; SET field1=new-value1 where id=1</code></li><li>删除表数据： <code>DELETE FROM &lt;数据表名&gt; where id=1</code></li><li>插入表数据：<code>INSERT INTO &lt;数据表名&gt; ( field1, field2) VALUES ( value1, value2);</code></li><li>导出库(mysql外部)： <code>mysqldump -u账号 -p &lt;库名&gt; &gt; www.sql</code></li><li>导出库（mysql外部）： <code>mysqldump -u账号 -p &lt;库名&gt; &lt;表名&gt; &gt; www.sql</code></li></ul><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux:</span></a></h3><ul><li>替换（vi进入文件）：<code>:s/utf8mb4_0900_ai_ci/utf8_general_ci/g</code><ul><li><code>:s/utf8mb4/utf8/g</code></li></ul></li><li>对比ab文件：<code>diff a b</code></li><li>当前文件夹下全局查找关键字：<code>grep -rn &quot;leetcode&quot;</code></li></ul>`,10)]))}const s=t(o,[["render",n]]),h=JSON.parse(`{"path":"/article/code/%E6%9F%A5%E7%9C%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E5%AD%98%E5%8D%A0%E7%94%A8.html","title":"查看服务器内存占用","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2025-03-20T00:00:00.000Z","category":["技术"],"tag":["Linux"],"description":"查看服务器内存占用 查看所有mysql数据库内存占用： linux内存查看： ls -lht : 查看文件大小 du --max-depth=1 -h： 查看当前文件夹下每个文件夹的内存占用 du -sh /usr: 查看单个文件夹内存 df -h: 查看全部磁盘内存 lsof |grep deleted(文件名): 查看使用文件的进程 MySQL: ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/code/%E6%9F%A5%E7%9C%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E5%AD%98%E5%8D%A0%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"查看服务器内存占用"}],["meta",{"property":"og:description","content":"查看服务器内存占用 查看所有mysql数据库内存占用： linux内存查看： ls -lht : 查看文件大小 du --max-depth=1 -h： 查看当前文件夹下每个文件夹的内存占用 du -sh /usr: 查看单个文件夹内存 df -h: 查看全部磁盘内存 lsof |grep deleted(文件名): 查看使用文件的进程 MySQL: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-20T05:57:35.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2025-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T05:57:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查看服务器内存占用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-20T05:57:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chione\\",\\"url\\":\\"https://chione.github.io\\"}]}"]]},"git":{"createdTime":1742450255000,"updatedTime":1742450255000,"contributors":[{"name":"wen.tian","username":"wen.tian","email":"tw958658@163.com","commits":1,"url":"https://github.com/wen.tian"}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"article/code/查看服务器内存占用.md","localizedDate":"2025年3月20日","excerpt":"\\n<hr>\\n<h3>查看所有mysql数据库内存占用：</h3>\\n<pre><code>select \\nTABLE_SCHEMA, \\nconcat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,\\nconcat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size\\nfrom information_schema.tables\\ngroup by TABLE_SCHEMA\\nORDER BY data_size desc;\\n</code></pre>\\n<h3>linux内存查看：</h3>","autoDesc":true}`);export{s as comp,h as data};
