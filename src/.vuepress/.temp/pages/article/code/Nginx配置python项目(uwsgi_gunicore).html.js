import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/code/Nginx配置python项目(uwsgi_gunicore).html.vue"
const data = JSON.parse("{\"path\":\"/article/code/Nginx%E9%85%8D%E7%BD%AEpython%E9%A1%B9%E7%9B%AE(uwsgi_gunicore).html\",\"title\":\"Django项目部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Python\",\"后端\",\"Django\"],\"description\":\"Django项目部署 项目初始化： gunicorn -c gunicorn.py my_dhblog.wsgi:application pipenv shell 进入pipenv虚拟环境 pipenv sync 安装依赖 python manage.py makemigrations 数据库迁移 python manage.py migrate 数据...\"},\"readingTime\":{\"minutes\":1.86,\"words\":559},\"filePathRelative\":\"article/code/Nginx配置python项目(uwsgi_gunicore).md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<h2>项目初始化：</h2>\\n<p>gunicorn -c <a href=\\\"http://gunicorn.py\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">gunicorn.py</a> my_dhblog.wsgi:application</p>\\n<ul>\\n<li>pipenv shell 进入pipenv虚拟环境</li>\\n<li>pipenv sync 安装依赖</li>\\n<li>python <a href=\\\"http://manage.py\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">manage.py</a> makemigrations 数据库迁移</li>\\n<li>python <a href=\\\"http://manage.py\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">manage.py</a> migrate 数据库迁移2</li>\\n</ul>\",\"autoDesc\":true}")
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
