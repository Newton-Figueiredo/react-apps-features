import React from 'react'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import FOTOS_SCHEMA from './graphql/fotos.graphql'

const inputStyle = {
  "display": "flex",
  "flex-direction": "column"
}

const inputStyle2 = {
  "display": "flex",
  "flex-direction": "column",
  "border": "1px solid #e3e4e6",
  "border-radius": "6px",
  "padding": "15px 10px",
  "margin": "15px 0px",
}

const LogImageAdmin = () => {
  const { loading, error, data } = useQuery(FOTOS_SCHEMA)
  console.log(data)
  return (
    <Layout fullWidth pageHeader={<PageHeader title="Log of Images" />}>
      <PageBlock >
        <div className='content' style={inputStyle} >
          <label htmlFor="image">History of images used in Site-Editor</label>

          {loading ? <span>...loading</span> :
            data.contents.edges.map((value, index, array) => {
              return (
                <div className='content-detail' style={inputStyle2}>
                  <span>
                    {value.cursor}
                  </span>
                  <span>
                    {value.node.name}
                  </span>
                  <span>
                    {value.node.updatedAt}
                  </span>
                  <span>
                    {value.node.status}
                  </span>
                </div>
              )
            })
          }
        </div>

      </PageBlock>
    </Layout>
  )
}

export default LogImageAdmin
