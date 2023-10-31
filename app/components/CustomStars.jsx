import { Sphere } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CustomStar = React.forwardRef((props, ref) => {
  return (
    <Sphere ref={ref} {...props} args={[0.002, 20, 20]}>
      <meshStandardMaterial
        toneMapped={false}
        emissive='#7232a6'
        emissiveIntensity={4}
      />
    </Sphere>
  );
});

const CustomStars = () => {
  const starsRef = useRef([]);

  useFrame(() => {
    starsRef.current.forEach((star) => {
      star.position.x += star.velocity.x;
      star.position.y += star.velocity.y;
      star.position.z += star.velocity.z;

      // Reset star position to the center if it's too far
      if (star.position.length() > 8.5) {
        star.position.set(
          10 * (Math.random() - 0.5),
          10 * (Math.random() - 0.5),
          5 * Math.random()
        );
        setRandomVelocity(star);
      }
    });
  });

  const setRandomVelocity = (star) => {
    const speed = 0.001;
    const normalizedPosition = star.position.clone().normalize();

    star.velocity = {
      x: speed * normalizedPosition.x,
      y: speed * normalizedPosition.y,
      z: speed * normalizedPosition.z,
    };
  };

  return (
    <>
      {Array.from({ length: 400 }).map((_, i) => {
        const starRef = (star) => {
          starsRef.current[i] = star;
          if (star) setRandomVelocity(star);
        };

        return (
          <CustomStar
            key={i}
            ref={starRef}
            position={[
              (Math.random() - 0.5) * 8, // Making this smaller so more stars start closer to the center
              (Math.random() - 0.5) * 8,
              Math.random() * 5,
            ]}
          />
        );
      })}
    </>
  );
};

export default CustomStars;
