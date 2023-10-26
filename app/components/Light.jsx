import { useRef } from 'react';
import { PointLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const Light = () => {
  const ref = useRef();
  const condition = false;

  useHelper(condition && ref, PointLightHelper, 1);

  return (
    <pointLight
      ref={ref}
      args={[`white`]}
      position={[0, 3, 0]}
      intensity={5}
      decay={0}
    />
  );
};

export default Light;
