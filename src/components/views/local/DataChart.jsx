import React, { useEffect, useState } from 'react';
import css from '../../../styles/dataList.css';
import { ResponsivePie } from '@nivo/pie';

const { DataContainer } = css;

const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor='#333333'
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'ruby',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'c',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'go',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'python',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'scala',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'lisp',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'elixir',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'javascript',
        },
        id: 'lines',
      },
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 30,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);

const DataChart = (props) => {
  useEffect(() => {}, []);
  return (
    <DataContainer style={{ height: '500px' }}>
      <MyResponsivePie
        data={[
          {
            id: 'Покупка продуктов',
            label: 'Покупка продуктов',
            value: 44,
            color: 'hsl(215, 70%, 50%)',
          },
          {
            id: 'Оплата счетов',
            label: 'Оплата счетов',
            value: 144,
            color: 'hsl(26, 70%, 50%)',
          },
          {
            id: 'Покупка одежды',
            label: 'Покупка одежды',
            value: 281,
            color: 'hsl(89, 70%, 50%)',
          },
          {
            id: 'Расходы на транспорт',
            label: 'Расходы на транспорт',
            value: 532,
            color: 'hsl(321, 70%, 50%)',
          },
          {
            id: 'Развлечения',
            label: 'Развлечения',
            value: 113,
            color: 'hsl(56, 70%, 50%)',
          },
          {
            id: 'Путешевствия',
            label: 'Путешевствия',
            value: 223,
            color: 'hsl(56, 70%, 50%)',
          },
        ]}
      />
    </DataContainer>
  );
};

export default DataChart;
