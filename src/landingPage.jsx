import React from 'react'
import ReExt from '@sencha/reext';

const MyExample = () => {
  return (
    <ReExt xtype="tabpanel" width="100%" height={400} activeTab={0}>
      <ReExt xtype="container" title="Tab 1" iconCls="x-fa fa-home">
        Content for Tab 1
      </ReExt>
      <ReExt xtype="container" title="Tab 2" iconCls="x-fa fa-cogs">
        Content for Tab 2
      </ReExt>
      <ReExt xtype="container" title="Tab 3" iconCls="x-fa fa-info-circle">
        Content for Tab 3
      </ReExt>
    </ReExt>
  )
}
export default MyExample