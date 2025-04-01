import ReExt from '@sencha/reext';
import { useState } from 'react';

// Sample data for charts (replace with your actual data)
const chartData = {
  store: {
    fields: ['name', 'value'],
    data: [
      { name: 'A', value: 10 },
      { name: 'B', value: 20 },
      { name: 'C', value: 15 },
    ],
  },
};

const GetChartHtml = () => {
  const [droppedBox, setDroppedBox] = useState(null);

  const chartTypes = {
    box1: { type: 'cartesian', seriesType: 'bar', title: 'Bar Chart' }, // Bar Chart
    box2: { type: 'cartesian', seriesType: 'line', title: 'Line Chart' }, // Line Chart
    box3: { type: 'polar', seriesType: 'pie', title: 'Pie Chart' }, // Pie Chart
  };

  // Placeholder for drop handler (to be enhanced with drag-and-drop library)
  const handleDrop = (boxId) => {
    console.log("483489")
    setDroppedBox(boxId);
  };

  return (
    <ReExt xtype="container" config={{ layout: "hbox", height: 400, width: 800 }}>
      {/* Drag Boxes Panel */}
      <ReExt xtype="panel" config={{ title: "Drag Boxes", width: 200, height: 400, bodyPadding: 10 }}>
        <ReExt
          xtype="container"
          config={{
            itemId: "box1",
            html: "Box 1",
            cls: "drag-box",
          }}
          // Simulate click-to-drop for now
          onClick={() => handleDrop('box1')}
        />
        <ReExt
          xtype="container"
          config={{
            itemId: "box2",
            html: "Box 2",
            cls: "drag-box",
          }}
          onClick={() => handleDrop('box2')}
        />
        <ReExt
          xtype="container"
          config={{
            itemId: "box3",
            html: "Box 3",
            cls: "drag-box",
          }}
          onClick={() => { handleDrop('box3') }}
        // onClick={() => handleDrop('box3')}
        />
      </ReExt>

      {/* Drop Area Panel */}
      <ReExt
        xtype="panel"
        config={{
          title: "Drop Area",
          flex: 1,
        }}
        bodyStyle={{ background: '#000000' }}
      >
        {droppedBox ? (
          <ReExt
            xtype={chartTypes[droppedBox].type}
            config={{
              width: "100%",
              height: 300,
              store: { chartData },
              axes: chartTypes[droppedBox].type === 'cartesian'
                ? [
                  { type: 'numeric', position: 'left' },
                  { type: 'category', position: 'bottom' },
                ]
                : []
              ,
              series: [{
                type: chartTypes[droppedBox].seriesType,
                xField: 'name',
                yField: 'value',
              }]
            }}
          >
            <ReExt xtype="title" config={{ text: chartTypes[droppedBox].title }} />
          </ReExt>
        ) : (
          <ReExt
            xtype="component"
            config={{

              html: '<div class="drop-message">Click a box to see its chart</div>'
            }}
          />
        )}
      </ReExt>
    </ReExt >
  );
};

export default GetChartHtml;