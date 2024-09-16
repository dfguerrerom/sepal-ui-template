import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the voila-sepal-ui extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'voila-sepal-ui:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension voila-sepal-ui is activated!');
  }
};

export default plugin;
