export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(world, x, y) {
        super(world, x, y, 'player'); //llama a la constructora de Sprite
        this.setScale(0.8, 0.8); //reducimos la escala del sprite

        this.scene.add.existing(this); //lo añades en la escena
        this.scene.matter.add.sprite(this); //lo añado a las fisicas de Matter
        
        console.log(this);

        //this.body.setCollideWorldBounds(); //creamos limites fisicos
        //this.matter.body.allowGravity = false; //quitamos gravedad
        this.setFriction(0); //quitamos friccion
        this.setFrictionAir(0);
        this.setFixedRotation(0);

        this.speed = 4; //velocidad

        this.cursorsPlayer = this.scene.input.keyboard.addKeys({ //teclas de direccion
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            interact: Phaser.Input.Keyboard.KeyCodes.E,
            blindfold: Phaser.Input.Keyboard.KeyCodes.SPACE
        });
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta); //preUpdate de Sprite (necesario para animaciones)

        //Calculamos la velocidad
        let velX = 0, velY = 0;
        if (this.cursorsPlayer.up.isDown) {
            velY -= this.speed;
        }
        if (this.cursorsPlayer.down.isDown) {
            velY += this.speed;
        }
        if (this.cursorsPlayer.left.isDown) {
            velX -= this.speed;
        }
        if (this.cursorsPlayer.right.isDown) {
            velX += this.speed;
        }

        //Normalizamos el vector
        if (velX != 0 && velY != 0) {
            velX /= Math.sqrt(2);
            velY /= Math.sqrt(2)
        }

        //Aplicamos la velocidad al cuerpo
        this.setVelocity(velX, velY);

        //Reproducimos la animación que corresponda
        if (velX == 0) {
            if (velY == 0)
                this.anims.play('idle', true);
            else if (velY < 0)
                this.anims.play('up_move', true);
            else
                this.anims.play('down_move', true);
        }
        else if (velX < 0)
            this.anims.play('left_move', true);
        else
            this.anims.play('right_move', true);
    }

    interact() {
        return this.cursorsPlayer.interact;
    }

    blindfold() {
        return this.cursorsPlayer.blindfold;
    }

    getPos() {
        return [this.x, this.y];
    }
}