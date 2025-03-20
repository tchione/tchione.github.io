---
icon: pen-to-square
date: 2025-03-20
category:
  - 技术
tag:
  - Python
---


# PYTHON-signal(线程)
---

### signal(自带)
**注意:在wnidows系统中只能调用 SIGABRT, SIGFPE, SIGILL, SIGINT, SIGSEGV, or SIGTERM**

* 核心代码：
	* 监听信号
		* `signal.signal(需要捕获的信号，捕获后执行的方法)`
	* 暂停进程，等待信号
		* `signal.pause()`
	*  主动发送信号(延迟5S)
		* `signal.alarm(5)` 
		* `os.kill(os.getpid(), 信号)`
* 监听、接收配置的信号，执行指定的处理方式
	* 处理方式：
		* 指定处理函数
		* 忽略
		* 根据系统默认值处理, 大部分信号的默认处理是终止进程 


* 规则信号


| 信号编号 | 名称 | 默认动作 | 说明 |
| :---: | :---: | :---: | :---: |
| 1 | SIGHUP | 终止 | 终止控制终端或进程 |
| 2 | SIGINT | 终止 | 由键盘引起的终端(Ctrl-c) |
| 3 | SIGQUIT | dump | 控制终端发送给进程的信号, 键盘产生的退出(Ctrl-\) |
| 4 | GIGILL | dusmp | 非法指令引起 |
| 5 | SIGTRAP | dump | debug中断 |
| 6 | SIGABRT/SIGIOT | dump | 异常中止 |
| 7 | SIGBUS/SIGEMT | dump | 总线异常/EMT指令 |
| 8 | SIGFPE | dump | 浮点运算溢出 |
| 9 | SIGKILL | 终止 | 强制杀死进程(大招, 进程不可捕获) |
| 10 | SIGUSR1 | 终止 | 用户信号, 进程可自定义用途 |
| 11 | SIGSEGV | dump | 非法内存地址引起 |
| 12 | SIGUSR2 | 终止 | 用户信号, 进程可自定义用途 |
| 13 | SIGPIPE | 终止 | 向某个没有读取的管道中写入数据 |
| 14 | SIGALRM | 终止 | 时钟中断(闹钟) |
| 15 | SIGTERM | 终止 | 进程终止(进程可捕获) |
| 16 | SIGSTKFLT | 终止 | 协处理器栈错误 |
| 17 | SIGCHLD | 忽略 | 子进程退出或中断 |
| 18 | SIGCONT | 继续 | 如进程停止状态则开始运行 |
| 19 | SIGSTOP | 停止 | 停止进程运行 |
| 20 | SIGSTP | 停止 | 键盘产生的停止 |
| 21 | SIGTTIN | 停止 | 后台进程请求输入 |
| 22 | SIGTTOU | 停止 | 后台进程请求输出 |
| 23 | SIGURG | 忽略 | socket发送紧急情况 |
| 24 | SIGXCPU | dump | CPU时间限制被打破 |
| 25 | SIGXFSZ | dump | 文件大小限制被打破 |
| 26 | SIGVTALRM | 终止 | 虚拟定时时钟 |
| 27 | SIGPROF | 终止 | profile timer clock |
| 28 | SIGWINCH | 忽略|窗口尺寸调整 |
| 29 | SIGIO/SIGPOLL |终止 |I/O可用 |
| 30 | SIGPWR | 终止 | 电源异常 |
| 31 | SIGSYS/SYSUNUSED | dump | 系统调用异常 |

* 使用栗子：
	* 监听信号2(Ctrl-c)

``` 
import signal
receive_times = 0
def handler(signalnum, handler):
	# signalnum：信号类型
	# handler：获得信号发生时，进程栈的状况(stack frame)
    global receive_times
    print u"收到信号", signalnum, frame, receive_times
    receive_times += 1
    if receive_times > 3:
        exit(0) # 自己走
 
def main():
    signal.signal(signal.SIGINT, handler) # Ctrl-c
    while True: # 改成 while 效果会好点
       pass
 
if __name__ == '__main__':
	main()
```
	