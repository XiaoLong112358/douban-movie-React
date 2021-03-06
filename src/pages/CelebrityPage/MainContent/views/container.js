import React from 'react'
import Info from './Info'
import RelatedPic from './RelatedPic'
import MovieList from './MovieList'
import style from '../css/main.scss'
import { pageName, moduleName } from '../constant'
import { viewGenerator } from '@/fetchGenerator'
import { API_CELEBRITY } from '@/constants'


class Celebrity extends React.Component {
  render() {
    console.log(this.props)
    if (this.props.isLoading) {
      return <h2 className="loadingPlaceHolder">加载中...</h2>
    }
    let {
      name,
      name_en,
      summary,
      works,
      photos,
      avatars: { large: avatar }
    }
    = this.props.data
    return (
      <div className={style.celebrityWrapper}>
        <h1 className={style.title}>{name}{name_en}</h1>
        <div className={style.headline}>
          <div>
            <img src={avatar} alt={avatar} className={style.avatar} />
          </div>
          <div>
            <Info data={this.props.data} />
          </div>
        </div>
        <div>
          <div className={style.dashedBorder}></div>
          <div>
            <h2 className={style.sectionTitle}>影人简介  · · · · · ·</h2>
            <p>{summary}</p>
          </div>
          <div>
            <h2 className={style.sectionTitle}>影人图片  · · · · · ·</h2>
            <RelatedPic data={photos} />
          </div>
          <div>
            <h2 className={style.sectionTitle}>最受好评的5部作品  · · · · · ·</h2>
            <MovieList data={works.map(item => (item.subject))} />
          </div>
          {/* <div>
            <h2 className={style.sectionTitle}>最受好评的5部作品  · · · · · ·</h2>
            <MovieList data={worksSubjects} />
          </div> */}
        </div>
      </div>
    )
  }
}

const DataView = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_CELEBRITY,
    view: Celebrity
  }
)

export default DataView
