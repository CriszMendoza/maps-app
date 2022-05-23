import { useStore } from "vuex"
import { StateInterface } from '@/store/index';
import { onMounted } from "vue";

const usePlacesStore = () => {
	const store = useStore<StateInterface>()

	onMounted(()=>{
		if (!store.getters['places/isUserLocationReady']) {
			store.dispatch('places/getInitialLocation')
		}
	})


	return {

	}
}

export default usePlacesStore