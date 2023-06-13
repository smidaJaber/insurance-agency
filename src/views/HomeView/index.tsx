import React from "react";
import { HistoiresDeClients } from "~/components/ClientsStories";
import { CustomerService } from "~/components/CustomerService";
import { FaqWithImage } from "~/components/FAQ";
import { HomeHeaderTop } from "~/components/Headers/HomeHeaderTop/index";
import ServicesSection from "~/components/OurServices";
import { NewsLetterSubscription } from "~/components/newsletter";
export default function Home() {
	const stories = [
		{
			name: "Marie Dupont",
			title: "Un service exceptionnel",
			content:
				"J'ai été agréablement surprise par le service que j'ai reçu de l'agence d'assurance. Ils ont été très professionnels et ont pris le temps de répondre à toutes mes questions. Je recommande vivement leurs services!",
			imageUrl: "https://picsum.photos/400/300?random=1",
		},
		{
			name: "Paul Martin",
			title: "Une assurance sur mesure",
			content:
				"J'ai été très satisfait du service personnalisé que j'ai reçu de l'agence d'assurance. Ils ont pris en compte mes besoins spécifiques et ont créé une assurance sur mesure qui répond parfaitement à mes attentes.",
			imageUrl: "https://picsum.photos/400/300?random=2",
		},
		{
			name: "Sophie Bernard",
			title: "Un service client de qualité",
			content:
				"Je suis très contente du service client que j'ai reçu de l'agence d'assurance. Ils ont été très réactifs et ont résolu tous mes problèmes rapidement. Je recommande chaudement leurs services!",
			imageUrl: "https://picsum.photos/400/300?random=3",
		},
	];
	const services = [
		{
			title: "Assurance Santé",
			description: "Couverture complète pour vous et votre famille.",
			icon: "https://via.placeholder.com/150",
		},
		{
			title: "Assurance Vie",
			description: "Protégez votre avenir et celui de vos proches.",
			icon: "https://via.placeholder.com/150",
		},
		{
			title: "Assurance Auto",
			description: "Assurez votre voiture et votre tranquillité d’esprit.",
			icon: "https://via.placeholder.com/150",
		},
	];

	return (
		<div>
			<HomeHeaderTop />
			<ServicesSection services={services} />
			<FaqWithImage />
			<HistoiresDeClients stories={stories} />
			<CustomerService />
			<NewsLetterSubscription />
		</div>
	);
}
