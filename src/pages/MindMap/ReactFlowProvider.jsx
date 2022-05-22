import { useEffect } from 'react';
import create from 'zustand'
import ReactFlow, { ReactFlowProvider, useReactFlow  } from 'react-flow-renderer';
import OverviewFlow from './OverviewFlow'

function FlowWithProvider() {
    
    return (
      <ReactFlowProvider>
        <OverviewFlow />
      </ReactFlowProvider>
    );
  }

export default FlowWithProvider