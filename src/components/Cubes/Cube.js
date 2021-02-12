import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { useFrame } from 'react-three-fiber';
import { random } from 'lodash';

export default () => {
  const mesh = useRef();
  const time = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const isActiveRef = useRef(isActive);

  const position = useMemo(() => {
    return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
  }, []);

  const timeMod = useMemo(() => random(0.1, 4, true), []);
  const color = isHovered ? 0xe5d54 : isActive ? 0xf7e7e5 : 0xf95b3c;

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod;
    if (isActiveRef.current) {
      time.current += 0.03;
      mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4;
    }
  });

  const onHover = useCallback(
    (e) => {
      e.stopPropagation();
      setIsActive((v) => !v);
    },
    [setIsActive],
  );

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={(e) => onClick(e)}
      onPointerOver={(e) => onHover(e, true)}
      onPointerOut={(e) => onHover(e, false)}
    >
      <boxBufferGeometry attach="geometry" args={[0.047, 0.5, 0.29]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
};
