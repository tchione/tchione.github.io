import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/code/privacyAndRegulationBlockchain.html.vue"
const data = JSON.parse("{\"path\":\"/article/code/privacyAndRegulationBlockchain.html\",\"title\":\"Privacy And Regulation Blockchain\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"数字货币\"],\"description\":\"Privacy And Regulation Blockchain 摘要： Bitcoin提供的假名并不是完全的匿名。通过分析交易信息可以破坏Bitcoin所谓的匿名。这篇文章分析了比特币的隐私问题，调查了现有的加强了隐私的加密货币。并且提出两种可能的解决方案来平衡加密货币的隐私和管制：一种基于去中心化的群签名，另一种基于可验证加密。 介绍： 提到了可...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/code/privacyAndRegulationBlockchain.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Privacy And Regulation Blockchain\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Privacy And Regulation Blockchain 摘要： Bitcoin提供的假名并不是完全的匿名。通过分析交易信息可以破坏Bitcoin所谓的匿名。这篇文章分析了比特币的隐私问题，调查了现有的加强了隐私的加密货币。并且提出两种可能的解决方案来平衡加密货币的隐私和管制：一种基于去中心化的群签名，另一种基于可验证加密。 介绍： 提到了可...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"数字货币\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Privacy And Regulation Blockchain\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":5.8,\"words\":1741},\"filePathRelative\":\"article/code/privacyAndRegulationBlockchain.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<h3>摘要：</h3>\\n<ul>\\n<li>Bitcoin提供的假名并不是完全的匿名。通过分析交易信息可以破坏Bitcoin所谓的匿名。这篇文章分析了比特币的隐私问题，调查了现有的加强了隐私的加密货币。并且提出两种可能的解决方案来平衡加密货币的隐私和管制：一种基于去中心化的群签名，另一种基于可验证加密。</li>\\n</ul>\\n<h3>介绍：</h3>\\n<ul>\\n<li>提到了可以通过跟踪交易信息和与假名相关的IP地址来得到用户的信息。</li>\\n</ul>\\n<h3>正文：</h3>\\n<ul>\\n<li>\\n<p>首先把加密货币中的隐私分为三类：付款方的隐私，收款人的隐私，交易金额的隐私。现有的加强Bitcoin隐私的方法分为两类：1. 在Bitcoin上加一层保护隐私机制； 2. 基于Bitcoin开发山寨币。</p>\\n</li>\\n<li>\\n<p>一些保护隐私机制：</p>\\n<ol>\\n<li>一次性账户：削弱可连接性，通过为每个交易生成一些新的账户来保护付款方的隐私。从已知的种子生成秘钥，并且秘钥存储在一个树结构中。父秘钥可以生成子秘钥，对于不知道种子的用户，就不知道这些秘钥之间的关系。同时还有一种隐藏地址技术：允许付款方为收款人生成一次性的地址来保护收款人的隐私，CryptoNote利用了隐藏地址技术，当执行交易时，付款方根据收款人的公钥生成一个新的一次性地址，只有收款人的私钥可以恢复这个一次性地址的私钥，并且从中得到转账。</li>\\n<li>中心化的混淆：引入一个可信的第三方，来将用户的转账和其他用户的转账混合在一起，然后转给一个新的账户，再转给用户要转账的收款方。有中心化问题。</li>\\n<li>去中心的混淆：Coinjoin，兼容Bitcoin，可以模糊付款方和收款人的关系（不能确切的知道哪个用户转给了哪个收款方），但现实中很难找到同时转账的用户进行mix。</li>\\n<li>隐藏交易金额：2017，基于背包混合的任意值CoinJoin交易。提出一种新的输出分割算法，，允许Coinjoin的交易有任意值。ValueShuffle协议，整合了隐藏地址技术和基于Coinjoin的隐藏交易金额的技术。</li>\\n</ol>\\n</li>\\n<li>\\n<p>专注隐私的竞争币：</p>\\n<ol>\\n<li>Dash：基于比特币，使用扩展版的Coinjoin机制，至少三个参与者，混淆机制。</li>\\n<li>Zerocoin：将其他币（如比特币）兑换成Zerocoin，选择一个唯一的序列号和随机数生成一份commitment，花费Zerocoin时采用零知识证明方法打开commitment。只能保障付款方的隐私。</li>\\n<li>Zerocash：嵌套commitment，隐藏公钥和交易金额。使用了同态加密和zk-SNARKs，生成证明开销非常大。</li>\\n<li>Monero：基于RingCT协议，使用了CryptoNote协议，使用可连接的环签名保护付款方的隐私，使用了Pedersen commitment保护交易金额的隐私。</li>\\n<li>PIVX：基于Bitcoin，使用Masternode（这个暂时还没了解）加强交易金额的隐私，为了保护用户的隐私，使用zPIV（zerocoinPIV协议）执行交易。</li>\\n<li>Verge：使用多重匿名通信机制保护用户的IP地址，Onion Routing和I2P。</li>\\n</ol>\\n</li>\\n<li>\\n<p>现有的加密货币的追踪机制：</p>\\n</li>\\n<li>\\n<p>主要分为三个类型：</p>\\n<ol>\\n<li>基于交易分析：通过地址的重复使用和共同使用的多个地址，可以推断多个地址属于一个拥有者甚至可以基于一些额外信息将地址映射到真实世界的实体。对于Bitcoin的追踪，常用聚类算法，图论和数据分析。目前这些分析都需要大量数据的输入来分析账户之间的关系，对于单个用户如何追踪没有解决。</li>\\n<li>基于中央团体：2016，RSCoin，引入了中央银行的概念，中央银行掌控货币供应。2017，CCS，Solidus，几个银行管理所有用户的账户和交易，只有银行可以追溯所辖用户，但是这两个币都是部分分布的，由中心化风险。UVcoin，矿工是被授权采集交易信息的，而不是PoW，会对错误行为负责。有授权，需要中心化，中心化不应引入区块链。</li>\\n<li>基于密码学工具：Garman提出了一个针对DAP协议的可靠隐私机制。允许可选择的对用户和货币进行追踪。追踪货币需要的信息都被一个对称密钥加密，并且这个秘钥被追踪的授权机制进行加密。</li>\\n</ol>\\n</li>\\n<li>\\n<p>提出的解决方案：</p>\\n<ul>\\n<li>利用可验证加密（？？？），并将追踪主管设置为交易中的被动实体。基本思想是，追踪主管有他自己的公私钥，都是独立生成的，当一个用户产生了新的交易时，追踪主管就用私钥加密用户的隐私信息，矿工利用可验证加密技术来确认交易是否正确，当出现了一些有恶意行为的用户时，追踪主管就用其私钥解密该用户的隐私信息来进行追踪。</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
