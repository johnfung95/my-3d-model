# My 3D model
- This model uses the Ready Player Me website to create a 3d avatar.
    - the generated *.glb* file contains the 3d model data
- The avatar then being projected using react-three/fiber and react-three/drei.
    - the models are created with command `npx gltfjsx <model target>`
- The animations are accquire by transforming the *.glb* file to *.fbx* file. Then the *.fbx* file was uploaded to Mixamo
    - the animations can be selected for the uploaded avatar
    - and then convert the downloaded animation from *.fbx* to *.glb* through the Blender editor
- The website is deployed to firebase

Reference: https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf