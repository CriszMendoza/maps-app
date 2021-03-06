import usePlacesStore from '@/composables/usePlacesStore';
import { defineComponent, ref, computed } from 'vue';
import SearchResult from "../search-results/SearchResult.vue";

export default defineComponent({
	name: 'SearchBar',
	components:{
		SearchResult
	},
	setup(){
		const { searchPlacesByTerm } = usePlacesStore()

		const debouncedTimeout = ref()
		const debouncedValue = ref('')

		return{
			debouncedValue,
			searchTerm: computed({
				get(){
					return debouncedValue.value
				},
				set(val: string){
					if (debouncedTimeout.value) clearTimeout(debouncedTimeout.value)

					debouncedTimeout.value = setTimeout(() => {
						debouncedValue.value = val
						searchPlacesByTerm(debouncedValue.value)
					}, 1000);
				}
			})
		}
	}
})