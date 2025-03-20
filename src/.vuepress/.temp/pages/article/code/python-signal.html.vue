<template><div><h1 id="python-signal-线程" tabindex="-1"><a class="header-anchor" href="#python-signal-线程"><span>PYTHON-signal(线程)</span></a></h1>
<hr>
<h3 id="signal-自带" tabindex="-1"><a class="header-anchor" href="#signal-自带"><span>signal(自带)</span></a></h3>
<p><strong>注意:在wnidows系统中只能调用 SIGABRT, SIGFPE, SIGILL, SIGINT, SIGSEGV, or SIGTERM</strong></p>
<ul>
<li>
<p>核心代码：</p>
<ul>
<li>监听信号
<ul>
<li><code v-pre>signal.signal(需要捕获的信号，捕获后执行的方法)</code></li>
</ul>
</li>
<li>暂停进程，等待信号
<ul>
<li><code v-pre>signal.pause()</code></li>
</ul>
</li>
<li>主动发送信号(延迟5S)
<ul>
<li><code v-pre>signal.alarm(5)</code></li>
<li><code v-pre>os.kill(os.getpid(), 信号)</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>监听、接收配置的信号，执行指定的处理方式</p>
<ul>
<li>处理方式：
<ul>
<li>指定处理函数</li>
<li>忽略</li>
<li>根据系统默认值处理, 大部分信号的默认处理是终止进程</li>
</ul>
</li>
</ul>
</li>
<li>
<p>规则信号</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">信号编号</th>
<th style="text-align:center">名称</th>
<th style="text-align:center">默认动作</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">SIGHUP</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">终止控制终端或进程</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">SIGINT</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">由键盘引起的终端(Ctrl-c)</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">SIGQUIT</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">控制终端发送给进程的信号, 键盘产生的退出(Ctrl-)</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">GIGILL</td>
<td style="text-align:center">dusmp</td>
<td style="text-align:center">非法指令引起</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">SIGTRAP</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">debug中断</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">SIGABRT/SIGIOT</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">异常中止</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">SIGBUS/SIGEMT</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">总线异常/EMT指令</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">SIGFPE</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">浮点运算溢出</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">SIGKILL</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">强制杀死进程(大招, 进程不可捕获)</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">SIGUSR1</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">用户信号, 进程可自定义用途</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">SIGSEGV</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">非法内存地址引起</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center">SIGUSR2</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">用户信号, 进程可自定义用途</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center">SIGPIPE</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">向某个没有读取的管道中写入数据</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center">SIGALRM</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">时钟中断(闹钟)</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:center">SIGTERM</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">进程终止(进程可捕获)</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center">SIGSTKFLT</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">协处理器栈错误</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:center">SIGCHLD</td>
<td style="text-align:center">忽略</td>
<td style="text-align:center">子进程退出或中断</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:center">SIGCONT</td>
<td style="text-align:center">继续</td>
<td style="text-align:center">如进程停止状态则开始运行</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:center">SIGSTOP</td>
<td style="text-align:center">停止</td>
<td style="text-align:center">停止进程运行</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">SIGSTP</td>
<td style="text-align:center">停止</td>
<td style="text-align:center">键盘产生的停止</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:center">SIGTTIN</td>
<td style="text-align:center">停止</td>
<td style="text-align:center">后台进程请求输入</td>
</tr>
<tr>
<td style="text-align:center">22</td>
<td style="text-align:center">SIGTTOU</td>
<td style="text-align:center">停止</td>
<td style="text-align:center">后台进程请求输出</td>
</tr>
<tr>
<td style="text-align:center">23</td>
<td style="text-align:center">SIGURG</td>
<td style="text-align:center">忽略</td>
<td style="text-align:center">socket发送紧急情况</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:center">SIGXCPU</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">CPU时间限制被打破</td>
</tr>
<tr>
<td style="text-align:center">25</td>
<td style="text-align:center">SIGXFSZ</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">文件大小限制被打破</td>
</tr>
<tr>
<td style="text-align:center">26</td>
<td style="text-align:center">SIGVTALRM</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">虚拟定时时钟</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:center">SIGPROF</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">profile timer clock</td>
</tr>
<tr>
<td style="text-align:center">28</td>
<td style="text-align:center">SIGWINCH</td>
<td style="text-align:center">忽略</td>
<td style="text-align:center">窗口尺寸调整</td>
</tr>
<tr>
<td style="text-align:center">29</td>
<td style="text-align:center">SIGIO/SIGPOLL</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">I/O可用</td>
</tr>
<tr>
<td style="text-align:center">30</td>
<td style="text-align:center">SIGPWR</td>
<td style="text-align:center">终止</td>
<td style="text-align:center">电源异常</td>
</tr>
<tr>
<td style="text-align:center">31</td>
<td style="text-align:center">SIGSYS/SYSUNUSED</td>
<td style="text-align:center">dump</td>
<td style="text-align:center">系统调用异常</td>
</tr>
</tbody>
</table>
<ul>
<li>使用栗子：
<ul>
<li>监听信号2(Ctrl-c)</li>
</ul>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span>import signal</span></span>
<span class="line"><span>receive_times = 0</span></span>
<span class="line"><span>def handler(signalnum, handler):</span></span>
<span class="line"><span>	# signalnum：信号类型</span></span>
<span class="line"><span>	# handler：获得信号发生时，进程栈的状况(stack frame)</span></span>
<span class="line"><span>    global receive_times</span></span>
<span class="line"><span>    print u"收到信号", signalnum, frame, receive_times</span></span>
<span class="line"><span>    receive_times += 1</span></span>
<span class="line"><span>    if receive_times > 3:</span></span>
<span class="line"><span>        exit(0) # 自己走</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    signal.signal(signal.SIGINT, handler) # Ctrl-c</span></span>
<span class="line"><span>    while True: # 改成 while 效果会好点</span></span>
<span class="line"><span>       pass</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>if __name__ == '__main__':</span></span>
<span class="line"><span>	main()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


