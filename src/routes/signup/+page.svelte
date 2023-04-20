<script lang="ts">
	import FullWidthButton from '$lib/shared/buttons/FullWidthButton.svelte';

	let first_name: string = '';
	let last_name: string = '';
	let email: string = '';
	let password: string = '';
	let register: boolean = false;
	let confirmPassword: string = '';
	let noMatch: boolean = false;
    let lat: number = 0;
    let long: number = 0;

	// async function formSubmit(e: any) {
	// 	if (register && password == confirmPassword){
	// 		try {
	// 			await authHandler.signUp(email, password);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}

	// 	else{
	// 		try {
	// 			await authHandler.login(email, password);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}

	// 	e.target.reset();

	// }
</script>

<!-- <section class="bg-gray-800 mt-20">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
		<div
			class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
				>
					Create new account
				</h1>

				<form class="space-y-4 md:space-y-6">
					<div>
						<label for="email" class="block mb-2 text-sm font-medium text-white"
							>Your email</label
						>
						<input
							bind:value={email}
							type="email"	
							name="email"
							id="email"
							class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
							placeholder="name@company.com"
							required
							autocomplete="off"
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-white">Password</label
						>
						<input
							bind:value={password}
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
							required
						/>
					</div>

                    <div>
                        <label
                            for="confirmPassword"
                            class="block mb-2 text-sm font-medium text-white"
                            >Confirm password</label
                        >
                        <input
                            bind:value={confirmPassword}
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="••••••••"
                            class="sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                            required
                            on:focusout={() => {
                                if (password == confirmPassword){
                                    noMatch = false;
                                } else {
                                    noMatch = true;
                                }}}
                        />
                    </div>

					<div class="flex items-center justify-between">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input
									id="remember"
									aria-describedby="remember"
									type="checkbox"
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800"
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
							</div>
						</div>
						<a
							href="#"
							class="font-medium  hover:underline text-teal-500 hover:text-teal-500"
							>Forgot password?</a
						>
					</div>

					{#if noMatch}
						<p class="text-sm font-light text-red-500 dark:text-red-400">
							Passwords do not match
						</p>
					{/if}
            

					<button
						type="submit"
						class="w-full flex text-sm items-center justify-center rounded-lg border border-transparent bg-teal-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-teal-600 hover:text-gray-200 "
						>Sign up</button
					>

                    <p class="text-sm font-light text-gray-400">
                        Already have an account? <a
                            class="font-medium  hover:underline text-teal-500 "
                            href="/login"
                            >
                            Sign in 
                        </a>
                    </p>
				</form>
			</div>
		</div>
	</div>
</section> -->

<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<section class="bg-gray-800">
	<div class="flex justify-center ">
		<div class="max-w-xl lg:max-w-3xl">
			<h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white mt-20">
				Create new account
			</h1>

			<form action="#" class=" mt-5 grid grid-cols-6 gap-6">
				<div class="col-span-6 sm:col-span-3">
					<label for="First Name" class="block mb-2 text-sm font-medium text-white"
						>First Name</label
					>
					<input
						bind:value={first_name}
						type="text"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="John"
						required
						autocomplete="off"
					/>
				</div>

				<div class="col-span-6 sm:col-span-3">
					<label for="Last Name" class="block mb-2 text-sm font-medium text-white">Last Name</label>
					<input
						bind:value={last_name}
						type="text"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="Doe"
						required
						autocomplete="off"
					/>
				</div>

				<div class="col-span-6">
					<label for="email" class="block mb-2 text-sm font-medium text-white">Email</label>
					<input
						bind:value={email}
						type="email"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="name@company.com"
						required
						autocomplete="off"
					/>
				</div>

                <div class="col-span-6 sm:col-span-3">
					<label for="Latitude" class="block mb-2 text-sm font-medium text-white"
						>Latitude</label
					>
					<input
						bind:value={lat}
						type="number"
                        step="any"
                        min="-90"
                        max="90"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="John"
						required
						autocomplete="off"
					/>
				</div>

                <div class="col-span-6 sm:col-span-3">
					<label for="Longitude" class="block mb-2 text-sm font-medium text-white"
						>Longitude</label
					>
					<input
						bind:value={long}
						type="number"
                        step="any"
                        min="-180"
                        max="180"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="John"
						required
						autocomplete="off"
					/>
				</div>

               

				<div class="col-span-6 sm:col-span-3">
					<label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
					<input
						bind:value={password}
						type="password"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="••••••••"
						required
						autocomplete="off"
					/>
				</div>

				<div class="col-span-6 sm:col-span-3">
					<label for="confirm password" class="block mb-2 text-sm font-medium text-white"
						>Confirm Password</label
					>
					<input
						bind:value={confirmPassword}
						type="password"
						class=" sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
						placeholder="••••••••"
						required
						autocomplete="off"
						on:focusout={() => {
							if (password == confirmPassword) {
								noMatch = false;
							} else {
								noMatch = true;
							}
						}}
					/>
				</div>

				{#if noMatch}
					<p class="text-sm font-light text-red-500 dark:text-red-400 col-span-6">
						Passwords do not match
					</p>
				{/if}

				<div class="col-span-6">
					<label for="MarketingAccept" class="flex gap-4">
						<input
							type="checkbox"
							id="MarketingAccept"
							name="marketing_accept"
							class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
						/>

						<span class="text-sm text-gray-200">
							I want to receive emails about events, product updates and company announcements.
						</span>
					</label>
				</div>

				<div class="col-span-6">
					<p class="text-sm text-gray-400">
						By creating an account, you agree to our
						<a href="#" class="underline text-gray-200"> terms and conditions </a>
						and
						<a href="#" class="underline text-gray-200"> privacy policy </a>.
					</p>
				</div>

				<button
					type="submit"
					class="col-span-6 w-full flex text-sm items-center justify-center rounded-lg border border-transparent bg-teal-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-teal-600 hover:text-gray-200 "
					>Sign up</button
				>

				<p class="text-sm font-light text-gray-400 col-span-6 mb-8">
					Already have an account? <a
						class="font-medium  hover:underline text-teal-500 "
						href="/login"
					>
						Sign in
					</a>
				</p>
			</form>
		</div>
	</div>
</section>
