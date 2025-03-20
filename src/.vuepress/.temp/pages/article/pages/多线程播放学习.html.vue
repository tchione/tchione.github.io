<template><div><h1 id="多线程视频播放-转" tabindex="-1"><a class="header-anchor" href="#多线程视频播放-转"><span>多线程视频播放(转)</span></a></h1>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>背景：目前主流的播放器（potplayer 1、vlc、mpc…）均不支持多线程播放在线视频，但有些链接单线程下载速度很低，不能流畅播放。</span></span>
<span class="line"><span>以往只能使用多线程下载器（aria2c 1、idm、迅雷…）下载到本地之后，再使用播放器播放。有可能还没下载完，我就没兴趣看了。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="教程" tabindex="-1"><a class="header-anchor" href="#教程"><span>教程</span></a></h3>
<ul>
<li>环境：<code v-pre>python3.7</code>（其他版本自测）</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>创建虚拟环境并激活：</span></span>
<span class="line"><span>py -3.7 -m venv player</span></span>
<span class="line"><span>player\Scripts\activate</span></span>
<span class="line"><span>pip install keyring==19.1.0 pycookiecheat==0.4.5</span></span>
<span class="line"><span>pip install video_funnel</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改源码：
<ul>
<li>打开<code v-pre>player/Lib/site-packages/video_funnel/server.py</code>文件<br>
找到get_info函数，将整个函数替换成下面这样</li>
</ul>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>@retry</span></span>
<span class="line"><span>    async def get_info():</span></span>
<span class="line"><span>        nonlocal url</span></span>
<span class="line"><span>        async with aiohttp.ClientSession() as session:</span></span>
<span class="line"><span>            async with session.get(url, allow_redirects=True, headers={</span></span>
<span class="line"><span>                "Range": "bytes=0-0",</span></span>
<span class="line"><span>            }) as resp:</span></span>
<span class="line"><span>                if not use_original_url:</span></span>
<span class="line"><span>                    url = str(resp.url)</span></span>
<span class="line"><span>                content_range = resp.headers['Content-Range']</span></span>
<span class="line"><span>                content_length = int(content_range.split('/')[1])</span></span>
<span class="line"><span>                content_type = resp.headers['Content-Type']</span></span>
<span class="line"><span>                return content_length, content_type</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>命令行运行：<code v-pre>py -m video_funnel -b 10M -p 1M --port 9999 -u &quot;http://example.com/video.mp4&quot;</code>
<ul>
<li>链接替换为能下载的视频链接，自己或他人</li>
<li>浏览器运行<code v-pre>http://127.0.0.1:9999</code>开始播放
<ul>
<li><code v-pre>-b</code>表示块大小，表示每次转发给播放器的数据量<br>
<code v-pre>-p</code>表示分片大小，每个块会拆分成分片，每个分片由单独的线程下载<br>
<code v-pre>-b</code> <code v-pre>10M</code> <code v-pre>-p</code> <code v-pre>1M</code> 相当于<code v-pre>10</code>线程</li>
<li>其它参数可以使用<code v-pre>py -m video_funnel -h</code>查看</li>
</ul>
</li>
</ul>
</li>
</ul>
</div></template>


