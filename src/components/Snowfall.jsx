import React, { useEffect, useRef } from 'react';

const FLAKE_COUNT = 80;

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function createFlake(canvasWidth, canvasHeight) {
    return {
        x: randomBetween(0, canvasWidth),
        y: randomBetween(-canvasHeight, 0),
        radius: randomBetween(1, 3),
        speed: randomBetween(0.4, 1.2),
        wind: randomBetween(-0.3, 0.3),
        opacity: randomBetween(0.2, 0.7),
        wobble: randomBetween(0, Math.PI * 2),
        wobbleSpeed: randomBetween(0.005, 0.02),
    };
}

const Snowfall = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let flakes = Array.from({ length: FLAKE_COUNT }, () => createFlake(width, height));
        let animId;

        const onResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', onResize);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            flakes.forEach((flake) => {
                // Soft wobble
                flake.wobble += flake.wobbleSpeed;
                flake.x += flake.wind + Math.sin(flake.wobble) * 0.3;
                flake.y += flake.speed;

                // Reset when out of view
                if (flake.y > height + 10) {
                    flake.y = randomBetween(-50, -10);
                    flake.x = randomBetween(0, width);
                }
                if (flake.x < -10) flake.x = width + 10;
                if (flake.x > width + 10) flake.x = -10;

                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 5 }}
        />
    );
};

export default Snowfall;
