<style scoped>
body {
	font-family: sans-serif;
	text-align: center;
	background: #f0f0f0;
	padding: 20px;
}

.digimon {
	margin: 20px;
	padding: 20px;
	background: white;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.hp {
	font-weight: bold;
	color: red;
}

button {
	margin: 5px;
	padding: 10px 20px;
	font-size: 16px;
}

.log {
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
	text-align: left;
	max-width: 500px;
	background: #fff;
	padding: 10px;
	border-radius: 5px;
}
</style>

<template>
	<h1>數碼寶貝回合制戰鬥</h1>

	<div class="digimon">
		<h2>你：{{ player.name }}</h2>
		<p>HP: <span class="hp">{{ player.hp }}</span></p>
		<div v-if="isPlayerTurn && !gameOver">
			<p>選擇技能攻擊：</p>
			<button v-for="skill in player.skills" @click="useSkill(skill, 'player')">
				{{ skill.name }} (傷害: {{ skill.damage }})
			</button>
		</div>
	</div>

	<div class="digimon">
		<h2>敵人：{{ enemy.name }}</h2>
		<p>HP: <span class="hp">{{ enemy.hp }}</span></p>
	</div>

	<div v-if="gameOver">
		<h2>{{ winner }} 獲勝！</h2>
		<button @click="resetGame">重新開始</button>
	</div>

	<div class="log">
		<h3>戰鬥紀錄：</h3>
		<ul>
			<li v-for="(entry, i) in battleLog" :key="i">{{ entry }}</li>
		</ul>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			player: {
				name: '亞古獸',
				hp: 100,
				skills: [
					{ name: '小型火焰', damage: 15 },
					{ name: '火焰飛踢', damage: 20 }
				]
			},
			enemy: {
				name: '加布獸',
				hp: 100,
				skills: [
					{ name: '冰之吐息', damage: 10 },
					{ name: '尖牙衝擊', damage: 18 }
				]
			},
			isPlayerTurn: true,
			gameOver: false,
			winner: '',
			battleLog: []
		}
	},
	components: {
	},
	computed: {},
	methods: {
		useSkill(skill, by) {
			if (this.gameOver) return

			const target = by === 'player' ? this.enemy : this.player
			target.hp -= skill.damage
			if (target.hp < 0) target.hp = 0

			const attacker = by === 'player' ? this.player.name : this.enemy.name
			this.battleLog.unshift(`${ attacker } 使用 ${ skill.name }，造成 ${ skill.damage } 傷害！`)

			this.checkGameOver()

			if (!this.gameOver) {
				this.isPlayerTurn = !this.isPlayerTurn
				if (!this.isPlayerTurn) {
					setTimeout(this.enemyAttack, 1000)
				}
			}
		},
		enemyAttack() {
			const randomSkill = this.enemy.skills[Math.floor(Math.random() * this.enemy.skills.length)]
			this.useSkill(randomSkill, 'enemy')
		},
		checkGameOver() {
			if (this.player.hp <= 0) {
				this.gameOver = true
				this.winner = this.enemy.name
			} else if (this.enemy.hp <= 0) {
				this.gameOver = true
				this.winner = this.player.name
			}
		},
		resetGame() {
			this.player.hp = 100
			this.enemy.hp = 100
			this.isPlayerTurn = true
			this.gameOver = false
			this.winner = ''
			this.battleLog = []
		}
	},
}
</script>
