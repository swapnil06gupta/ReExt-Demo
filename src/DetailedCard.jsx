import React from "react";
import "../public/card.css";
import ReExt from "@sencha/reext";

const CryptoGrid = ({ data }) => {
  const cardTemplate = `
    <div >
      <div class="card-header">
        <img src="{image}" alt="Crypto Logo" class="crypto-logo"/>
        <div class="card-name">{name}</div>
        <div class="crypto-pair">
          <div class="crypto-price">{volume}</div>
          <div style="text-align: end">Volume</div>
        </div>
      </div>
      <div class="card-body">
        <div class="crypto-volume">
          <span>{volume} USDT</span>
          <span class="volume-label">= NA</span>
        </div>
        <div class="crypto-change" style="color: {changePer24h:startsWith('-') ? '#c0392b' : '#27ae60'}; background: {changePer24h:startsWith('-') ? '#ffe6e6' : '#e6ffed'};">
          {changePer24h}
        </div>
      </div>
    </div>
  `;

  return (
    <>
      <div style={{ padding: '20px' }}>
        <ReExt
          xtype="dataview"
          style={{ height: '400px', overflow: 'auto' }}
          config={{
            store: {
              data: data,
              proxy: {
                type: 'memory',
                reader: {
                  type: 'json',
                },
              },
            },
            itemTpl: cardTemplate,
            emptyText: '<p style="text-align: center; padding: 20px;">Loading...</p>',
            inline: true,
          }}
        />
      </div>
    </>
  );
};

export default CryptoGrid;
