import React from "react";
import { stats } from "./util/data";
import "./stats.scss"

const Stats = (props) => {
  console.log(stats);
  return (
    <section className="text-white mb-5">
      <h1 className="mb-4">What we're helping with</h1>
      <div className="row">
        {
          stats.map((item, index) => {
            return (
              <div className="stat col-md-4">
                <div className="p-3">
                  <h2 className="title">{item.title}</h2>
                  <h3 className="sub-title">{item.subtitle}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Stats;