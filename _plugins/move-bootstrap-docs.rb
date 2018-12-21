module MoveBootstrapDocs
  class Generator < Jekyll::Generator
    def generate(site)
      show_debug = true
      node_path = '/node_modules/bootstrap-docs/site/docs'
      preferred_path = '/docs/bootstrap'

      puts ''
      puts '-----------------------'
      puts ''
      puts 'Move Bootstrap Docs...'
      puts ''

      site.pages.each do |page|
        puts "Page URL: #{page.url}" if show_debug

        if page.url.include? node_path
          page.url.sub!(node_path, '')
          page.url.prepend(preferred_path)
          puts "Move To:   #{page.url}" if show_debug
          puts '' if show_debug
        else
          puts 'Keep in place.' if show_debug
          puts '' if show_debug
        end
      end

      puts 'Finished Moving Bootstrap Docs'
      puts ''

    end
  end
end
