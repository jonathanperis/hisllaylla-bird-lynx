// import { useCallback, useEffect, useState } from '@lynx-js/react'
import { useEffect, useRef } from '@lynx-js/react'

import './App.css'
// import arrow from './assets/arrow.png'
// import lynxLogo from './assets/lynx-logo.png'
// import reactLynxLogo from './assets/react-logo.png'

export function App() {
  // const [alterLogo, setAlterLogo] = useState(false)

  // useEffect(() => {
  //   console.info('Hello, ReactLynx')
  // }, [])

  // const onTap = useCallback(() => {
  //   'background only'
  //   setAlterLogo(!alterLogo)
  // }, [alterLogo])

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  const baseWidth = 300;
  const baseHeight = 500;

  useEffect(() => {
    const cvs = canvasRef.current as HTMLCanvasElement;
    const description = descriptionRef.current as HTMLElement;
    const ctx = cvs.getContext('2d') as CanvasRenderingContext2D;
    
    let theme1 = new Image();
    let theme2 = new Image();
    let frame: number = 0;
    let degree: number = Math.PI / 180;
    let scale: number = 1;

    let bg: any, pipes: any, ground: any, map: any, score: any, bird: any, bird1: any, bird2: any;
    let getReady: any, gameOver: any, medal: any;

    const SFX_SCORE = new Audio();
    const SFX_FLAP = new Audio();
    const SFX_COLLISION = new Audio();
    const SFX_FALL = new Audio();
    const SFX_SWOOSH = new Audio();

    theme1.src = './assets/img/og-theme.png';
    theme2.src = './assets/img/og-theme-2.png';
    SFX_SCORE.src = './assets/audio/sfx_point.wav';
    SFX_FLAP.src = './assets/audio/sfx_wing.wav';
    SFX_COLLISION.src = './assets/audio/sfx_hit.wav';
    SFX_FALL.src = './assets/audio/sfx_die.wav';
    SFX_SWOOSH.src = './assets/audio/sfx_swooshing.wav';

    let gameState = {
      current: 0,
      getReady: 0,
      play: 1,
      gameOver: 2
    };

    bg = {
      imgX: 0,
      imgY: 0,
      width: 276, 
      height: 228, 
      x: 0,
      y: 0,
      w: 276,
      h: 228,
      dx: 0.2,
      render: function() {
        ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
        ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x + this.w, this.y, this.w, this.h);
        ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x + this.w * 2, this.y, this.w, this.h);
      },
      position: function () {
        if (gameState.current === gameState.getReady) {
          this.x = 0;
        }
        if (gameState.current === gameState.play) {
          this.x = (this.x - this.dx * scale) % this.w;
        }
      }
    };

    medal = {
      bronze: { imgX: 359, imgY: 157 },
      silver: { imgX: 359, imgY: 113 },
      gold: { imgX: 359, imgY: 69 },
      platinum: { imgX: 359, imgY: 25 },
      width: 44, 
      height: 44, 
      x: 0,
      y: 0,
      w: 44,
      h: 44,

      relativeX: 31, 
      relativeY: 47, 
      type: null as string | null,

      setMedalType: function(score: number) {
        if (score >= 40) {
          this.type = 'platinum';
        } else if (score >= 30) {
          this.type = 'gold';
        } else if (score >= 20) {
          this.type = 'silver';
        } else if (score >= 10) {
          this.type = 'bronze';
        } else {
          this.type = null;
        }
      },

      render: function() {
        if (gameState.current === gameState.gameOver && this.type) {
          const medalType = this.type as 'bronze' | 'silver' | 'gold' | 'platinum';

          ctx.drawImage(
            theme1,
            this[medalType].imgX, 
            this[medalType].imgY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.w,
            this.h
          );
        }
      }
    };

    pipes = {
      top: { imgX: 56, imgY: 323 },
      bot: { imgX: 84, imgY: 323 },
      width: 26,
      height: 160,
      w: 55,
      h: 300,
      gap: 150,
      dx: 2,
      minY: 0,
      maxY: 0,
      pipeGenerator: [] as any[],
      reset: function() {
        this.pipeGenerator = [];
      },
      render: function() {
        for (let i = 0; i < this.pipeGenerator.length; i++) {
          let pipe = this.pipeGenerator[i];

          ctx.drawImage(
            theme2,
            this.top.imgX,
            this.top.imgY,
            this.width,
            this.height,
            pipe.x,
            pipe.topY,
            this.w,
            this.h
          );

          ctx.drawImage(
            theme2,
            this.bot.imgX,
            this.bot.imgY,
            this.width,
            this.height,
            pipe.x,
            pipe.bottomY,
            this.w,
            this.h
          );
        }
      },
      position: function() {
        if (gameState.current !== gameState.play) {
          return;
        }

        if (frame % 100 === 0) {
          const minPipeVisibility = -this.h / 2;

          let minGapPos = cvs.height * 0.25;
          let maxGapPos = cvs.height * 0.65 - this.gap; 

          let gapCenter = Math.floor(Math.random() * (maxGapPos - minGapPos)) + minGapPos;

          let topPipeY = gapCenter - this.h;

          topPipeY = Math.max(topPipeY, minPipeVisibility);

          let bottomPipeY = gapCenter + this.gap;

          bottomPipeY = Math.min(bottomPipeY, cvs.height - ground.h - this.h/4);

          this.pipeGenerator.push({
            x: cvs.width,
            topY: topPipeY,
            bottomY: bottomPipeY
          });
        }

        for (let i = 0; i < this.pipeGenerator.length; i++) {
          let pg = this.pipeGenerator[i];
          let b = {
            left: bird.x - bird.r,
            right: bird.x + bird.r,
            top: bird.y - bird.r,
            bottom: bird.y + bird.r
          };

          let p = {
            top: { top: pg.topY, bottom: pg.topY + this.h },
            bot: { top: pg.bottomY, bottom: pg.bottomY + this.h },
            left: pg.x,
            right: pg.x + this.w
          };

          pg.x -= this.dx * scale;

          if (pg.x < -this.w) {
            this.pipeGenerator.shift();
            score.current++;
            SFX_SCORE.play();
          }

          if (
            b.left < p.right &&
            b.right > p.left &&
            b.top < p.top.bottom &&
            b.bottom > p.top.top
          ) {
            gameState.current = gameState.gameOver;
            SFX_COLLISION.play();

            score.setBestScore();
            medal.setMedalType(score.current);
          }

          if (
            b.left < p.right &&
            b.right > p.left &&
            b.top < p.bot.bottom &&
            b.bottom > p.bot.top
          ) {
            gameState.current = gameState.gameOver;
            SFX_COLLISION.play();

            score.setBestScore();
            medal.setMedalType(score.current);
          }
        }
      }
    };

    ground = {
      imgX: 276,
      imgY: 0,
      width: 224,
      height: 112,
      x: 0,
      y: 0,
      w: 224,
      h: 112,
      dx: 2,
      render: function() {
        ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
        ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x + this.w, this.y, this.w, this.h);
      },
      position: function() {
        if (gameState.current === gameState.getReady) {
          this.x = 0;
        }
        if (gameState.current === gameState.play) {
          this.x = (this.x - this.dx * scale) % (this.w / 2);
        }
      }
    };

    map = [
      { imgX: 496, imgY: 60, width: 12, height: 18 },
      { imgX: 135, imgY: 455, width: 10, height: 18 },
      { imgX: 292, imgY: 160, width: 12, height: 18 },
      { imgX: 306, imgY: 160, width: 12, height: 18 },
      { imgX: 320, imgY: 160, width: 12, height: 18 },
      { imgX: 334, imgY: 160, width: 12, height: 18 },
      { imgX: 292, imgY: 184, width: 12, height: 18 },
      { imgX: 306, imgY: 184, width: 12, height: 18 },
      { imgX: 320, imgY: 184, width: 12, height: 18 },
      { imgX: 334, imgY: 184, width: 12, height: 18 }
    ];

    score = {
      current: 0,
      best: 0,
      x: cvs.width / 2,
      y: 40,
      w: 15,
      h: 25,

      setBestScore: function() {
        if (this.current > this.best) {
          this.best = this.current;

          localStorage.setItem('flappyBirdBestScore', this.best.toString());
        }
      },

      reset: function() {
        this.current = 0;
      },

      render: function() {
        if (gameState.current === gameState.play) {
          this.drawNumber(this.current, this.x, this.y);
        } 
        else if (gameState.current === gameState.gameOver) {
          const scoreY = gameOver.y + gameOver.h * 0.38;
          const bestY = gameOver.y + gameOver.h * 0.58;

          this.drawNumber(this.current, gameOver.x + gameOver.w * 0.6, scoreY);
          this.drawNumber(this.best, gameOver.x + gameOver.w * 0.6, bestY);
        }
      },

      drawNumber: function(value: number, x: number, y: number) {
        const string = value.toString();
        const digits = string.length;

        let startX = x - ((digits * this.w) / 2);
        if (digits % 2 === 0) {
          startX += this.w / 4; 
        }

        for (let i = 0; i < digits; i++) {
          const digit = parseInt(string[i]);

          ctx.drawImage(
            theme2,
            map[digit].imgX,
            map[digit].imgY,
            map[digit].width,
            map[digit].height,
            startX + (i * this.w),
            y,
            this.w,
            this.h
          );
        }
      }
    };

    const savedBestScore = localStorage.getItem('flappyBirdBestScore');
    if (savedBestScore) {
      score.best = parseInt(savedBestScore, 10);
    }

    bird = {
      animation: [
        { imgX: 276, imgY: 114 },
        { imgX: 276, imgY: 140 },
        { imgX: 276, imgY: 166 },
        { imgX: 276, imgY: 140 }
      ],
      fr: 0,
      width: 34,
      height: 24,
      x: 50,
      y: 160,
      w: 34,
      h: 24,
      r: 12,
      fly: 5.25,
      gravity: 0.32,
      velocity: 0,
      rotation: 0,

      reset: function() {
        this.velocity = 0;
        this.y = 160 * scale;
        this.rotation = 0;
        this.fr = 0;
      },

      render: function() {
        let birdFrame = this.animation[this.fr];
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(theme1, birdFrame.imgX, birdFrame.imgY, this.width, this.height, -this.w/2, -this.h/2, this.w, this.h);
        ctx.restore();
      },
      flap: function() {
        this.velocity = -this.fly;
      },
      position: function() {
        if (gameState.current === gameState.getReady) {
          this.y = 160 * scale;
          this.rotation = 0;
          if (frame % 20 === 0) {
            this.fr = (this.fr + 1) % this.animation.length;
          }
        } else {
          if (frame % 4 === 0) {
            this.fr = (this.fr + 1) % this.animation.length;
          }
          this.velocity += this.gravity;
          this.y += this.velocity * scale;
          if (this.velocity <= this.fly) {
            this.rotation = -15 * degree;
          } else if (this.velocity >= this.fly + 2) {
            this.rotation = 70 * degree;
            this.fr = 1;
          } else {
            this.rotation = 0;
          }
          if (this.y + this.h/2 >= cvs.height - ground.h) {
            this.y = cvs.height - ground.h - this.h/2;
            this.fr = 2;
            this.rotation = 70 * degree;
            if (gameState.current === gameState.play) {
              gameState.current = gameState.gameOver;
              SFX_FALL.play();

              score.setBestScore();
              medal.setMedalType(score.current);
            }
          }
          if (this.y - this.h/2 <= 0) {
            this.y = this.r * scale;
          }
        }
      }
    };

    bird1 = {
      animation: [
        { imgX: 115, imgY: 381 },
        { imgX: 115, imgY: 407 },
        { imgX: 115, imgY: 433 },
        { imgX: 115, imgY: 407 }
      ],
      fr: 0,
      width: 18,
      height: 12,
      x: 50,
      y: 160,
      w: 34,
      h: 24,
      r: 12,
      fly: 5.25,
      gravity: 0.32,
      velocity: 0,
      render: function() {
        let birdFrame = this.animation[this.fr];
        ctx.drawImage(theme2, birdFrame.imgX, birdFrame.imgY, this.width, this.height, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
      },
      flap: function() {
        this.velocity = -this.fly;
      },
      position: function() {
        if (gameState.current === gameState.getReady) {
          this.y = 160 * scale;
          if (frame % 20 === 0) {
            this.fr = (this.fr + 1) % this.animation.length;
          }
        } else {
          if (frame % 4 === 0) {
            this.fr = (this.fr + 1) % this.animation.length;
          }
          this.velocity += this.gravity;
          this.y += this.velocity * scale;
          if (this.y + this.h/2 >= cvs.height - ground.h) {
            this.y = cvs.height - ground.h - this.h/2;
            this.fr = 2;
            if (gameState.current === gameState.play) {
              gameState.current = gameState.gameOver;
              SFX_FALL.play();

              score.setBestScore();
              medal.setMedalType(score.current);
            }
          }
          if (this.y - this.h/2 <= 0) {
            this.y = this.r * scale;
          }
        }
      }
    };

    bird2 = {
      animation: [
        { imgX: 87, imgY: 491 },
        { imgX: 115, imgY: 329 },
        { imgX: 115, imgY: 355 },
        { imgX: 115, imgY: 329 }
      ],
      fr: 0,
      width: 18,
      height: 12,
      x: 50,
      y: 160,
      w: 34,
      h: 24,
      r: 12,
      fly: 5.25,
      gravity: 0.32,
      velocity: 0,
      render: function() {
        let birdFrame = this.animation[this.fr];
        ctx.drawImage(theme2, birdFrame.imgX, birdFrame.imgY, this.width, this.height, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
      },
      flap: function() {
        this.velocity = -this.fly;
      },
      position: function() {
        if (gameState.current === gameState.getReady) {
          this.y = 160 * scale;
          if (frame % 20 === 0) {
            this.fr = (this.fr + 1) % this.animation.length;
          }
        } else {
          if (frame % 4 === 0) {
            this.fr = (this.fr + 1) % this.animation.length;
          }
          this.velocity += this.gravity;
          this.y += this.velocity * scale;
          if (this.y + this.h/2 >= cvs.height - ground.h) {
            this.y = cvs.height - ground.h - this.h/2;
            this.fr = 2;
            if (gameState.current === gameState.play) {
              gameState.current = gameState.gameOver;
              SFX_FALL.play();

              score.setBestScore();
              medal.setMedalType(score.current);
            }
          }
          if (this.y - this.h/2 <= 0) {
            this.y = this.r * scale;
          }
        }
      }
    };

    getReady = {
      imgX: 0,
      imgY: 228,
      width: 174,
      height: 160,
      x: 0,
      y: 0,
      w: 174,
      h: 160,
      render: function() {
        if (gameState.current === gameState.getReady) {
          ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
        }
      }
    };

    gameOver = {
      imgX: 174,
      imgY: 228,
      width: 226,
      height: 158,
      x: 0,
      y: 0,
      w: 226,
      h: 158,
      render: function() {
        if (gameState.current === gameState.gameOver) {
          ctx.drawImage(theme1, this.imgX, this.imgY, this.width, this.height, this.x, this.y, this.w, this.h);
          if (description) {
            description.style.visibility = "visible";
          }
        }
      }
    };

    const resizeCanvas = () => {
      if (cvs) {
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;

        scale = Math.min(cvs.width/baseWidth, cvs.height/baseHeight);

        bg.w = 276 * scale;
        bg.h = 228 * scale;
        bg.y = cvs.height - bg.h;

        ground.w = 224 * scale;
        ground.h = 112 * scale;
        ground.y = cvs.height - ground.h;

        getReady.w = 174 * scale;
        getReady.h = 160 * scale;
        getReady.x = (cvs.width - getReady.w) / 2;
        getReady.y = (cvs.height - getReady.h) / 2;

        gameOver.w = 226 * scale;
        gameOver.h = 158 * scale;
        gameOver.x = (cvs.width - gameOver.w) / 2;
        gameOver.y = (cvs.height - gameOver.h) / 2;

        medal.w = 40 * scale; 
        medal.h = 40 * scale;

        const medalRelativeXScale = medal.relativeX / gameOver.width; 
        const medalRelativeYScale = medal.relativeY / gameOver.height; 

        medal.x = gameOver.x + (gameOver.w * medalRelativeXScale);
        medal.y = gameOver.y + (gameOver.h * medalRelativeYScale);

        pipes.w = 55 * scale;
        pipes.h = 300 * scale;
        pipes.gap = 150 * scale;

        score.x = cvs.width / 2;
        score.y = 40 * scale;
        score.w = 15 * scale;
        score.h = 25 * scale;

        bird.w = 34 * scale;
        bird.h = 24 * scale;
        bird.x = 50 * scale;
        bird.y = 160 * scale;
        bird.r = 12 * scale;

        bird1.w = 34 * scale;
        bird1.h = 24 * scale;
        bird1.x = 50 * scale;
        bird1.y = 160 * scale;
        bird1.r = 12 * scale;

        bird2.w = 34 * scale;
        bird2.h = 24 * scale;
        bird2.x = 50 * scale;
        bird2.y = 160 * scale;
        bird2.r = 12 * scale;
      }
    };

    const draw = () => {
      ctx.fillStyle = '#00bbc4';
      ctx.fillRect(0, 0, cvs.width, cvs.height);
      bg.render();
      pipes.render();
      ground.render();
      bird.render();
      getReady.render();
      gameOver.render(); 
      if (gameState.current === gameState.gameOver) {
        medal.render(); 
      }
      score.render();
    };

    const update = () => {
      bird.position();
      bg.position();
      pipes.position();
      ground.position();
    };

    const loop = () => {
      draw();
      update();
      frame++;
    };

    const resetGame = () => {
      pipes.reset();
      score.reset();
      bird.reset();
      medal.type = null; 
      gameState.current = gameState.getReady;
      SFX_SWOOSH.play();
      if (description) {
        description.style.visibility = "hidden";
      }
    };

    const handleClick = () => {
      if (gameState.current === gameState.getReady) {
        gameState.current = gameState.play;
      } else if (gameState.current === gameState.play) {
        bird.flap();
        SFX_FLAP.play();
        if (description) {
          description.style.visibility = "hidden";
        }
      } else if (gameState.current === gameState.gameOver) {
        resetGame();
      }
    };

    // Set up event listeners
    window.addEventListener('resize', resizeCanvas);
    cvs.addEventListener('click', handleClick);

    // Initialize the game
    resizeCanvas();
    const gameInterval = setInterval(loop, 17);

    // Cleanup function when component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cvs.removeEventListener('click', handleClick);
      clearInterval(gameInterval);
    };   
  }, [])

  return (
    // <view>
    //   <view className='Background' />
    //   <view className='App'>
    //     <view className='Banner'>
    //       <view className='Logo' bindtap={onTap}>
    //         {alterLogo
    //           ? <image src={reactLynxLogo} className='Logo--react' />
    //           : <image src={lynxLogo} className='Logo--lynx' />}
    //       </view>
    //       <text className='Title'>wrewwefw</text>
    //       <text className='Subtitle'>on Lynx</text>
    //     </view>
    //     <view className='Content'>
    //       <image src={arrow} className='Arrow' />
    //       <text className='Description'>Tap the logo and have fun!</text>
    //       <text className='Hint'>
    //         Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
    //         to see updates!
    //       </text>
    //     </view>
    //     <view style={{ flex: 1 }}></view>
    //   </view>
    // </view>

    <view>
      <canvas ref={canvasRef} id="game"></canvas>
      <p ref={descriptionRef} id="description" className="game-description">Press 'spacebar' or 'click' to begin</p>
    </view>
  )
}