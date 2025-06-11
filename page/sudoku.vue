<style scoped>
.sudoku {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.sudoku_tb {
	width: 500px;
	height: 500px;
	border: 2px solid #33465F;
	table-layout: fixed;
	border-collapse: collapse;
	border-spacing: 0;
	background-color: #fff;
}

.sudoku_tb td {
	width: 54px;
	height: 54px;
	color: #33465F;
	text-align: center;
	border-right: 1px solid #E2EAF2;
	border-bottom: 1px solid #E2EAF2;
	font-size: 20px;
}

.sudoku_tb td:nth-child(3),
.sudoku_tb td:nth-child(6) {
	border-right: 2px solid #33465F;
}

tr:nth-child(3) td,
tr:nth-child(6) td {
	border-bottom: 2px solid #33465F;
}

.sudoku_tb td input {
	width: 100%;
	height: 100%;
	border: none;
	font-size: inherit;
	text-align: center;
}
</style>

<template>
	<div class="sudoku">
		<table class="sudoku_tb">
			<tr v-for="(row, rowIndex) in board" :key="rowIndex">
				<td v-for="(cell, colIndex) in row" :key="colIndex">
					<input type="text" v-model="board[rowIndex][colIndex]" maxlength="1"
						@input="onInput(rowIndex, colIndex)">
				</td>
			</tr>
		</table>
		<div class="controls">
			<button @click="solveSudoku">🧠 自動解題</button>
			<button @click="resetBoard">🧼 清除</button>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			board: Array.from({ length: 9 }, () =>
				Array(9).fill('')
			)
		}
	},
	components: {
	},
	mounted() {
		console.log('board', this.board);
	},
	computed: {},
	methods: {
		onInput(row, col) {
			const val = this.board[row][col];
			if (!/^[1-9]$/.test(val)) {
				this.board[row][col] = '';
			}
			console.log('aaa', this.board);
		},
		isValid(row, col, num) {
			console.log(row, col, num);
			for (let i = 0; i < 9; i++) {
				if (
					this.board[row][i] == num ||
					this.board[i][col] == num ||
					this.board[Math.floor(row / 3) * 3 + Math.floor(i / 3)]
					[Math.floor(col / 3) * 3 + i % 3] == num
				) {
					return false;
				}
			}
			return true;
		},
		solveSudoku() {
			const solve = () => {
				for (let row = 0; row < 9; row++) {
					for (let col = 0; col < 9; col++) {
						if (this.board[row][col] === '') {
							for (let num = 1; num <= 9; num++) {
								if (this.isValid(row, col, num.toString())) {
									this.board[row][col] = num.toString();
									if (solve()) return true;
									this.board[row][col] = '';
								}
							}
							return false;
						}
					}
				}
				return true;
			};
			solve();
		},
		resetBoard() {
			this.board = Array.from({ length: 9 }, () =>
				Array(9).fill('')
			);
		}
	},
}
</script>
