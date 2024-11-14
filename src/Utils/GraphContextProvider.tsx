// NavigationContextProvider.tsx
import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { IGraphSettingsProps } from '../IGraphContextProps';

//Define the interface for the useReducer, this is the state value so whatever you intend to put inside it will be the type, using a string array here.

interface GraphState {
    GraphSettings: IGraphSettingsProps;
}

//The actions to be run, this still confuses me.

type Action =
  | { type: 'SET_GRAPH_STATE'; payload: IGraphSettingsProps }
  | { type: 'CLEAR_GRAPH_STATE'; };

const initialState: GraphState = { GraphSettings: {dataType:null, orientation:null, interval:30000, data:[]}};


//Create the reducer function (I hate all the const functions wtf is this all about.)
const navigationReducer = (graphState: GraphState, action: Action): GraphState => {

//Switch statement for actions and their... actions?
    switch (action.type) {
        case 'SET_GRAPH_STATE':
            return { ...graphState, GraphSettings: action.payload };
        case 'CLEAR_GRAPH_STATE':
          return { ...graphState, GraphSettings: {dataType:null, orientation:null, interval:30000, data:[]}};
        default:
            return graphState;
    }
};

//Create the context function (Another one...)
const GraphContext = createContext<{
    graphState: GraphState;
    graphDispatch: React.Dispatch<Action>;
  } | undefined>(undefined);
  
//Create the context instance

  export const useGraphContext = () => {
    const context = useContext(GraphContext);
    if (!context) {
      throw new Error('useGraphContext must be used within a GraphProvider');
    }
    return context;
  };

  //Interface to give children a type of ReactNode (A JSX component) as any will cause sticky bugs later down the line.
  
  interface GraphProviderProps {
    children: React.ReactNode;
  }

  //Create the localised context wrapper (All components wrapped by this component can access the context.)
  export const GraphProvider: React.FC<GraphProviderProps> = ({ children }) => {
    const [graphState, graphDispatch] = useReducer(navigationReducer, initialState);
  
    return (
      <GraphContext.Provider value={{ graphState, graphDispatch }}>
        {children}
      </GraphContext.Provider>
    );
  };
  