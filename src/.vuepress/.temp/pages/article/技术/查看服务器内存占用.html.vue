<template><div><h1 id="查看服务器内存占用" tabindex="-1"><a class="header-anchor" href="#查看服务器内存占用"><span>查看服务器内存占用</span></a></h1>
<hr>
<h3 id="查看所有mysql数据库内存占用" tabindex="-1"><a class="header-anchor" href="#查看所有mysql数据库内存占用"><span>查看所有mysql数据库内存占用：</span></a></h3>
<pre><code>select 
TABLE_SCHEMA, 
concat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,
concat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size
from information_schema.tables
group by TABLE_SCHEMA
ORDER BY data_size desc;
</code></pre>
<h3 id="linux内存查看" tabindex="-1"><a class="header-anchor" href="#linux内存查看"><span>linux内存查看：</span></a></h3>
<ul>
<li><code v-pre>ls  -lht </code>: 查看文件大小</li>
<li><code v-pre>du --max-depth=1 -h</code>： 查看当前文件夹下每个文件夹的内存占用</li>
<li><code v-pre>du -sh /usr</code>: 查看单个文件夹内存</li>
<li><code v-pre>df -h</code>: 查看全部磁盘内存</li>
<li><code v-pre> lsof |grep deleted(文件名)</code>: 查看使用文件的进程</li>
</ul>
<h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL:</span></a></h3>
<ul>
<li>删库：<code v-pre>drop database &lt;数据库名&gt;;</code></li>
<li>删表： <code v-pre>DROP TABLE &lt;数据表名&gt; ;</code></li>
<li>更新表数据：<code v-pre>UPDATE &lt;数据表名&gt; SET field1=new-value1  where id=1</code></li>
<li>删除表数据： <code v-pre>DELETE FROM &lt;数据表名&gt; where id=1</code></li>
<li>插入表数据：<code v-pre>INSERT INTO &lt;数据表名&gt; ( field1, field2) VALUES  ( value1, value2);</code></li>
<li>导出库(mysql外部)： <code v-pre>mysqldump  -u账号 -p &lt;库名&gt; &gt; www.sql</code></li>
<li>导出库（mysql外部）： <code v-pre>mysqldump  -u账号 -p &lt;库名&gt; &lt;表名&gt; &gt; www.sql</code></li>
</ul>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux:</span></a></h3>
<ul>
<li>替换（vi进入文件）：<code v-pre>:s/utf8mb4_0900_ai_ci/utf8_general_ci/g</code>
<ul>
<li><code v-pre>:s/utf8mb4/utf8/g</code></li>
</ul>
</li>
<li>对比ab文件：<code v-pre>diff a b</code></li>
<li>当前文件夹下全局查找关键字：<code v-pre>grep -rn &quot;leetcode&quot;</code></li>
</ul>
</div></template>


