<template>
	<div className="auth-wrapper">
		<div className="flex-row">
			<div className="auth-image">
				<img src="/images/loginimage.svg" />
			</div>
			<div className="auth-form">
				<Form method="post" name="loginForm" className="loginForm">
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
		}
	}
</script>