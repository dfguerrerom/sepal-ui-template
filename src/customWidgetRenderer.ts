// src/customWidgetRenderer.ts

// import { WidgetRenderer } from '@lumino/widgets';
import { IRenderMime } from '@jupyterlab/rendermime-interfaces';
import {
  KernelWidgetManager,
  WidgetRenderer
} from '@jupyter-widgets/jupyterlab-manager';

export class CustomWidgetRenderer extends WidgetRenderer {
  constructor(
    options: IRenderMime.IRendererOptions,
    manager: KernelWidgetManager
  ) {
    super(options, manager);

    // Add console.log() to confirm that this renderer is being used
    console.log('CustomWidgetRenderer instantiated');
  }

  // Optionally, override the renderModel method to add another console.log()
  async renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    console.log('CustomWidgetRenderer renderModel called');
    return super.renderModel(model);
  }
}

// export class CustomWidgetRenderer
//   extends Widget
//   implements IRenderMime.IRenderer
// {
//   constructor(
//     options: IRenderMime.IRendererOptions,
//     manager: KernelWidgetManager
//   ) {
//     super();
//     this.addClass('jp-CustomWidgetRenderer');

//     const { model, mimeType } = options;
//     const source = model.data.get(mimeType) as any;

//     // Create a placeholder for the custom loading component
//     const loadingNode = document.createElement('div');
//     loadingNode.className = 'my-custom-loading';
//     loadingNode.innerHTML =
//       '<div>Your custom loading message or spinner...</div>';
//     this.node.appendChild(loadingNode);

//     // Display the widget
//     manager
//       .display_model(undefined, source, { el: this.node })
//       .then(() => {
//         // Remove the loading component after the widget is loaded
//         this.node.removeChild(loadingNode);
//       })
//       .catch((err: any) => {
//         console.error('Error displaying widget', err);
//         // Optionally, display an error message
//       });
//   }
//   renderModel(model: IRenderMime.IMimeModel): Promise<void> {
//     throw new Error('Method not implemented.');
//   }
// }
