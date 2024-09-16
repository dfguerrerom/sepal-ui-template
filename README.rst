.. image:: https://github.com/dfguerrerom/voila-sepal-ui/actions/workflows/release.yml/badge.svg
   :target: https://github.com/dfguerrerom/voila-sepal-ui/actions/workflows/release.yml
   :alt: Upload Python Package


voila-sepal-ui
==============


Install
=======

This Package was created using the `copier <https://github.com/jupyterlab/extension-template>`_ template.

... code-block:: bash

   conda create -n voila-sepalui-ext --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=4 nodejs=20 git copier=9 jinja2-time



   # To install the package in development mode

   conda activate voila-sepalui-ext
   pip install -ve .

   # To create symbolic links for the extension

   jupyter labextension develop --overwrite .

   # To build the extension

   jlpm run build

   # To watch the extension for changes

   jlpm run watch


Install new dependencies

... code-block:: bash

   jlpm add @jupyterlab/apputils @jupyterlab/application


