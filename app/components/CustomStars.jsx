import { Sphere } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CustomStar = React.forwardRef((props, ref) => {
  return (
    <Sphere ref={ref} {...props} args={[0.002, 30, 30]}>
      <meshStandardMaterial
        toneMapped={false}
        emissive='#3E92CC'
        emissiveIntensity={3}
      />
    </Sphere>
  );
});

const CustomStars = () => {
  const starsRef = useRef([]);
  let speed = 0.001;
  const speedIncrement = 0.0001;

  useFrame(() => {
    starsRef.current.forEach((star) => {
      star.position.x += star.velocity.x;
      star.position.y += star.velocity.y;
      star.position.z += star.velocity.z;

      // Reset star position
      if (star.position.length() > 8.5) {
        star.position.set(
          5 * (Math.random() - 0.5),
          5 * (Math.random() - 0.5),
          2 * Math.random()
        );
        setRandomVelocity(star);
        speed = 0.001;
      }
    });
    speed += speedIncrement;
  });

  const setRandomVelocity = (star) => {
    const normalizedPosition = star.position.clone().normalize();

    star.velocity = {
      x: speed * normalizedPosition.x,
      y: speed * normalizedPosition.y,
      z: speed * normalizedPosition.z,
    };
  };

  return (
    <>
      {Array.from({ length: 300 }).map((_, i) => {
        const starRef = (star) => {
          starsRef.current[i] = star;
          if (star) setRandomVelocity(star);
        };

        return (
          <CustomStar
            key={i}
            ref={starRef}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              Math.random() * 3,
            ]}
          />
        );
      })}
    </>
  );
};

export default CustomStars;
