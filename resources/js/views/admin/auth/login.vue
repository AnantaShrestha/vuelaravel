<template>
	<div className="auth-wrapper">
		<div className="flex-row">
			<div className="auth-image">
				<img src="/images/loginimage.svg" />
			</div>
			<div className="auth-form">
				<Form 
					method="post" 
					group="loginForm" 
					className="loginForm" 
					:onFinish="loginForm"
					:validation = "[
							{name:'username',rules:'required'},
							{name:'password',rules:'required'}
					]"
				>
					<TextField 
						label="Username" 
						name="username" 
						wrapperClassName="auth-row" 
						className="form-control"
						placeholder="Username"
					/>
					<TextField 
						label="Password" 
						name="password" 
						wrapperClassName="auth-row" 
						className="form-control"
						placeholder="Password"
						type="password"
					/>
					
					<div className="auth-action-wrapper">
						<div className="form-group">
							<Button 		   
								type="submit" 
								text="Login" 
								className="auth-btn" 
							/>
						</div>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>
<script>
	import {TextField,Button,Form} from '@/components/Form'
	export default{
		components:{
			TextField,Button,Form
		},
		methods:{
			loginForm(values){
				console.log(values)
			}
		}
	}
</script>