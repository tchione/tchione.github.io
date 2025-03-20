import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/txt_md/Nginx配置python项目(uwsgi_gunicore).html.vue"
const data = JSON.parse("{\"path\":\"/article/txt_md/Nginx%E9%85%8D%E7%BD%AEpython%E9%A1%B9%E7%9B%AE(uwsgi_gunicore).html\",\"title\":\"项目部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Python\",\"后端\",\"Django\"],\"description\":\"项目部署 项目初始化： gunicorn -c gunicorn.py my_dhblog.wsgi:application pipenv shell 进入pipenv虚拟环境 pipenv sync 安装依赖 python manage.py makemigrations 数据库迁移 python manage.py migrate 数据库迁移2 u...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/txt_md/Nginx%E9%85%8D%E7%BD%AEpython%E9%A1%B9%E7%9B%AE(uwsgi_gunicore).html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"项目部署\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"项目部署 项目初始化： gunicorn -c gunicorn.py my_dhblog.wsgi:application pipenv shell 进入pipenv虚拟环境 pipenv sync 安装依赖 python manage.py makemigrations 数据库迁移 python manage.py migrate 数据库迁移2 u...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"后端\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Django\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"项目部署\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":1.86,\"words\":558},\"filePathRelative\":\"article/txt_md/Nginx配置python项目(uwsgi_gunicore).md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<h2>项目初始化：</h2>\\n<p>gunicorn -c <a href=\\\"http://gunicorn.py\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">gunicorn.py</a> my_dhblog.wsgi:application</p>\\n<ul>\\n<li>pipenv shell 进入pipenv虚拟环境</li>\\n<li>pipenv sync 安装依赖</li>\\n<li>python <a href=\\\"http://manage.py\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">manage.py</a> makemigrations 数据库迁移</li>\\n<li>python <a href=\\\"http://manage.py\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">manage.py</a> migrate 数据库迁移2</li>\\n</ul>\",\"autoDesc\":true}")
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
