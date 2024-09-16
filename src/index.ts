// src/index.ts

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';
// import { IJupyterWidgetRegistry } from '@jupyter-widgets/base';
import { CustomWidgetRenderer } from './customWidgetRenderer';
import { KernelWidgetManager } from '@jupyter-widgets/jupyterlab-manager';

const WIDGET_MIMETYPE = 'application/vnd.jupyter.widget-view+json';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'custom-widget-renderer',
  autoStart: true,
  requires: [IRenderMimeRegistry],
  activate: (app: JupyterFrontEnd, rendermime: IRenderMimeRegistry) => {
    console.log('Custom Widget Renderer extension activated');

    // Get the existing widget manager from Voila
    const manager = (app as any).widgetManager as KernelWidgetManager;
    if (!manager) {
      console.error('Widget manager not found');
      return;
    }

    // Remove existing renderer for the widget MIME type
    rendermime.removeMimeType(WIDGET_MIMETYPE);

    // Add the custom renderer
    rendermime.addFactory(
      {
        safe: false,
        mimeTypes: [WIDGET_MIMETYPE],
        createRenderer: options => new CustomWidgetRenderer(options, manager)
      },
      -10 // Priority
    );
  }
};

export default extension;
