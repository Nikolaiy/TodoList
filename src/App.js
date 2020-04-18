import React from 'react';
import { Header } from './components/layout/Headers'
import { Content } from './components/layout/Content'
import { ProjectsProvider, SelectedProjectProvider } from './context'

export const App = () =>  {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
    
  );
}
